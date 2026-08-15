import { afterNextRender, Component, effect, inject } from '@angular/core';
import { ThemeService } from '@wawjs/ngx-ui';
import type { Map, TileLayer } from 'leaflet';

interface MapMarker {
	label: string;
	name: string;
	url: string;
	coordinates: [number, number];
}

const LIGHT_TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

@Component({
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
})
export class MapComponent {
	private readonly _themeService = inject(ThemeService);
	private _leaflet?: typeof import('leaflet');
	private _map?: Map;
	private _tiles?: TileLayer;

	protected readonly markers: MapMarker[] = [
		{
			label: '1',
			name: 'Ustia Beach',
			url: 'https://maps.app.goo.gl/Q4nuvP7qaiEJp6e6A',
			coordinates: [48.5663921, 26.6384392],
		},
		{
			label: '2',
			name: 'Usamitnenyi camping beach',
			url: 'https://maps.app.goo.gl/VoCtmHgVKRFg4N3S9',
			coordinates: [48.5400665, 26.7010642],
		},
		{
			label: '3',
			name: 'Subitskyi Rock Monastery',
			url: 'https://maps.app.goo.gl/YnZsqA4Yuo3i2S316',
			coordinates: [48.5971582, 26.8281999],
		},
		{
			label: '4',
			name: 'Ark recreation base',
			url: 'https://maps.app.goo.gl/ZY1of38v8XwX6pUi6',
			coordinates: [48.5524486, 26.9001237],
		},
		{
			label: '5',
			name: 'Sunrise estate',
			url: 'https://maps.app.goo.gl/xCffnNPuYKDg2tqx6',
			coordinates: [48.5740642, 27.1217281],
		},
		{
			label: '6',
			name: 'Bakota House',
			url: 'https://maps.app.goo.gl/7x6F9VsbDCoNYAHp9',
			coordinates: [48.607788, 26.960148],
		},
	];

	constructor() {
		afterNextRender(async () => {
			const module = await import('leaflet');
			this._leaflet = (
				'default' in module ? module.default : module
			) as typeof import('leaflet');
			this._map = this._leaflet.map('map', { zoomControl: true }).fitBounds(
				this.markers.map((marker) => marker.coordinates),
				{ padding: [40, 40] },
			);
			this._updateTiles(this._themeService.mode() ?? 'light');

			for (const marker of this.markers) {
				this._leaflet
					.marker(marker.coordinates, { icon: _markerIcon(this._leaflet, marker.label) })
					.bindPopup(
						`<strong>${marker.name}</strong><br><a href="${marker.url}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>`,
					)
					.addTo(this._map);
			}

			for (const [start, finish] of [
				[this.markers[0], this.markers[1]],
				[this.markers[2], this.markers[3]],
				[this.markers[4], this.markers[5]],
			] as const) {
				this._leaflet
					.polyline([start.coordinates, finish.coordinates], {
						color: '#0e7490',
						dashArray: '8 8',
						weight: 4,
					})
					.addTo(this._map);
			}
		});

		effect(() => this._updateTiles(this._themeService.mode() ?? 'light'));
	}

	private _updateTiles(mode: string): void {
		if (!this._map || !this._leaflet) return;

		this._tiles?.remove();
		this._tiles = this._leaflet.tileLayer(mode === 'dark' ? DARK_TILES : LIGHT_TILES, {
			attribution: ATTRIBUTION,
			maxZoom: 19,
		});
		this._tiles.addTo(this._map);
	}
}

function _markerIcon(leaflet: typeof import('leaflet'), label: string) {
	return leaflet.divIcon({
		className: '',
		html: `<span class="map-marker">${label}</span>`,
		iconAnchor: [18, 18],
		iconSize: [36, 36],
	});
}
