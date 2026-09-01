import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { PanelModule } from '@wawjs/ngx-prime/panel';
import { CardModule } from '@wawjs/ngx-prime/card';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { companyEmailHref } from '../../feature/company/company.data';

@Component({
	selector: 'app-for-guides',
	imports: [TranslateDirective, ButtonModule, PanelModule, CardModule, AccordionModule],
	templateUrl: './for-guides.component.html',
	styleUrl: './for-guides.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForGuidesComponent {
	readonly translateService = inject(TranslateService);

	readonly companyEmailHref = companyEmailHref;

	readonly faq = [
		{
			question: 'Чи потрібен досвід, щоб стати гідом KP - SUP - KP?',
			answer:
				'Досвід плавання на SUP-дошці та впевнене володіння веслуванням обов’язкові, а офіційна кваліфікація інструктора — перевага, не вимога. Перед першою самостійною пригодою ми проводимо ознайомлення з маршрутами та правилами безпеки.',
		},
		{
			question: 'Скільки учасників одночасно веде один гід?',
			answer:
				'Група обмежена до 4 осіб на одного гіда — це дозволяє контролювати стан кожного учасника та спорядження протягом усієї пригоди.',
		},
		{
			question: 'Що робити, якщо погода погіршилась під час пригоди?',
			answer:
				'Гід самостійно приймає рішення про скорочення, перенесення маршруту або дострокове завершення пригоди — безпека групи має пріоритет над планом.',
		},
		{
			question: 'Як гід отримує та здає спорядження?',
			answer:
				'Спорядження видається перед стартом і перевіряється на пошкодження до і після пригоди; будь-які несправності гід фіксує та передає на ремонт.',
		},
	];
}
