import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

@Component({
	imports: [
		RouterLink,
		TranslateDirective,
		AccordionModule,
		ButtonModule,
		CardModule,
		TagModule,
		TimelineModule,
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly steps = [
		{ number: '01', title: "Бронювання маршруту" },
		{ number: '02', title: "Виїзд із Кам'янця-Подільського" },
		{ number: '03', title: 'Інструктаж та підготовка' },
		{ number: '04', title: 'SUP-подорож Дністром' },
		{ number: '05', title: 'Фініш маршруту' },
		{ number: '06', title: "Повернення до Кам'янця" },
	];

	readonly faq = [
		{ question: 'Чи потрібен досвід?', answer: 'Ні, ми проводимо детальний інструктаж перед стартом, і маршрути підходять навіть новачкам.' },
		{ question: 'Чи безпечно це?', answer: 'Так, кожен учасник отримує рятувальний жилет, а інструктор супроводжує групу протягом усього маршруту.' },
		{ question: 'Що взяти із собою?', answer: 'Зручний одяг, який не шкода намочити, змінний одяг, воду та гарний настрій — решту спорядження надаємо ми.' },
		// TODO: minimum weight for children is not documented anywhere in the codebase — confirm and add it here (see also src/data/rules/i18n/*.json "Участь дітей").
		{ question: 'Чи можна дітям?', answer: 'Так, дітям від 7 років, у супроводі дорослих та за погодженням з організатором — точні вагові обмеження уточнюйте при бронюванні.' },
		{ question: 'Яка максимальна кількість людей?', answer: 'Ми працюємо міні-групами до 4 осіб, щоб пригода була комфортною та безпечною для кожного.' },
	];

	constructor() {
		effect(() => {
			void this.translateService.loadExtraTranslation('/data/landing/i18n/', {
				language: this.translateService.language(),
			});
		});
	}
}
