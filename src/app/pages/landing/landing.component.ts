import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	private readonly _translateService = inject(TranslateService);

	constructor() {
		effect(() => {
			void this._translateService.loadExtraTranslation('/data/landing/i18n/', {
				language: this._translateService.language(),
			});
		});
	}
}
