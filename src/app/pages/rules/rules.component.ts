import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { PanelModule } from '@wawjs/ngx-prime/panel';

@Component({
	imports: [RouterLink, TranslateDirective, ButtonModule, PanelModule],
	templateUrl: './rules.component.html',
	styleUrl: './rules.component.scss',
})
export class RulesComponent {
	readonly translateService = inject(TranslateService);

	constructor() {
		effect(() => {
			void this.translateService.loadExtraTranslation('/data/rules/i18n/', {
				language: this.translateService.language(),
			});
		});
	}
}
