import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './rules.component.html',
	styleUrl: './rules.component.scss',
})
export class RulesComponent {
	private readonly _translateService = inject(TranslateService);

	constructor() {
		effect(() => {
			void this._translateService.loadExtraTranslation('/data/rules/i18n/', {
				language: this._translateService.language(),
			});
		});
	}
}
