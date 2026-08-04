import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, computed, inject, signal } from '@angular/core';

interface WindForecastResponse {
	hourly?: {
		time?: string[];
		wind_speed_10m?: number[];
		wind_direction_10m?: number[];
		wind_gusts_10m?: number[];
	};
}

interface WindReading {
	time: string;
	speed: number;
	direction: number;
	gusts: number;
}

const FORECAST_URL =
	'https://api.open-meteo.com/v1/forecast?latitude=48.58&longitude=26.99&hourly=wind_speed_10m,wind_direction_10m,wind_gusts_10m&forecast_days=16&timezone=Europe%2FKyiv';

@Component({
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
})
export class MapComponent {
	private readonly _http = inject(HttpClient);

	protected readonly ready = signal(false);
	protected readonly today = signal(new Date(2000, 0, 1));
	protected readonly selectedDate = signal(new Date(2000, 0, 1));
	protected readonly selectedHour = signal(12);
	protected readonly showWind = signal(true);
	protected readonly showRoutes = signal(true);
	protected readonly showLocations = signal(true);
	protected readonly routeFilter = signal('all');
	protected readonly locationFilter = signal('all');
	protected readonly forecast = signal<WindForecastResponse['hourly'] | null>(null);
	protected readonly forecastLoading = signal(false);
	protected readonly forecastError = signal(false);
	protected readonly selectedWind = signal(false);

	protected readonly todayIso = computed(() => _toIsoDate(this.today()));
	protected readonly tomorrowIso = computed(() => _toIsoDate(_addDays(this.today(), 1)));
	protected readonly selectedDateIso = computed(() => _toIsoDate(this.selectedDate()));
	protected readonly maxDateIso = computed(() => _toIsoDate(_addDays(this.today(), 15)));
	protected readonly selectedDateLabel = computed(() =>
		new Intl.DateTimeFormat('uk-UA', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
		}).format(this.selectedDate()),
	);
	protected readonly wind = computed<WindReading | null>(() => {
		const hourly = this.forecast();
		const target = `${this.selectedDateIso()}T${String(this.selectedHour()).padStart(2, '0')}:00`;
		const index = hourly?.time?.indexOf(target) ?? -1;
		if (index < 0) {
			return null;
		}

		return {
			time: target,
			speed: hourly?.wind_speed_10m?.[index] ?? 0,
			direction: hourly?.wind_direction_10m?.[index] ?? 0,
			gusts: hourly?.wind_gusts_10m?.[index] ?? 0,
		};
	});
	protected readonly windDirection = computed(() => _directionLabel(this.wind()?.direction ?? 0));
	protected readonly windStatus = computed(() => _windStatus(this.wind()?.speed ?? 0));
	protected readonly windArrowTransform = computed(
		() => `rotate(${this.wind()?.direction ?? 0}deg)`,
	);

	constructor() {
		afterNextRender(() => {
			const today = _startOfDay(new Date());
			this.today.set(today);
			this.selectedDate.set(today);
			this.ready.set(true);
			this._loadForecast();
		});
	}

	protected selectToday(): void {
		this.selectedDate.set(this.today());
	}

	protected selectTomorrow(): void {
		this.selectedDate.set(_addDays(this.today(), 1));
	}

	protected selectDate(value: string): void {
		if (!value) {
			return;
		}

		const date = _fromIsoDate(value);
		if (date >= this.today() && date <= _addDays(this.today(), 15)) {
			this.selectedDate.set(date);
		}
	}

	private _loadForecast(): void {
		this.forecastLoading.set(true);
		this.forecastError.set(false);
		this._http.get<WindForecastResponse>(FORECAST_URL).subscribe({
			next: (response) => {
				this.forecast.set(response.hourly ?? null);
				this.forecastLoading.set(false);
			},
			error: () => {
				this.forecastError.set(true);
				this.forecastLoading.set(false);
			},
		});
	}
}

function _startOfDay(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function _addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function _toIsoDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

function _fromIsoDate(value: string): Date {
	const [year, month, day] = value.split('-').map(Number);
	return new Date(year, month - 1, day);
}

function _directionLabel(direction: number): string {
	const directions = ['Пн', 'Пн-Сх', 'Сх', 'Пд-Сх', 'Пд', 'Пд-Зх', 'Зх', 'Пн-Зх'];
	return directions[Math.round(direction / 45) % directions.length];
}

function _windStatus(speed: number): string {
	if (speed < 12) return 'Сприятливі умови';
	if (speed < 22) return 'Помірний вітер';
	if (speed < 32) return 'Сильний вітер';
	return 'Маршрут не рекомендований';
}
