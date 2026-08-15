import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@wawjs/ngx-translate';
import { POINT_CHALLENGES } from '../../../data/points/challenges.data';

@Component({
	imports: [RouterLink],
	templateUrl: './points.component.html',
	styleUrl: './points.component.scss',
})
export class PointsComponent {
	private readonly _translateService = inject(TranslateService);
	protected readonly challenges = POINT_CHALLENGES;

	constructor() {
		effect(() => {
			void this._translateService.loadExtraTranslation('/data/points/i18n/', {
				language: this._translateService.language(),
			});
		});
	}

	protected translate(text: string): string {
		return this._translateService.translate(text)();
	}
}
