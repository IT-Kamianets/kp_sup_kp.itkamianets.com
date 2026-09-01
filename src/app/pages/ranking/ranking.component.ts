import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ParticipatorShortComponent } from '../../features/participator/participator-short/participator-short.component';
import { RANKINGS } from '../../features/participator/participator.data';
import { RankingPeriod } from '../../features/participator/participator.interface';

@Component({
	imports: [
		RouterLink,
		TranslateDirective,
		FormsModule,
		SelectButtonModule,
		ButtonModule,
		ParticipatorShortComponent,
	],
	templateUrl: './ranking.component.html',
	styleUrl: './ranking.component.scss',
})
export class RankingComponent {
	protected readonly period = signal<RankingPeriod>('weekly');
	protected readonly entries = computed(() => RANKINGS[this.period()]);
	protected readonly periods: { label: string; value: RankingPeriod }[] = [
		{ label: 'Тиждень', value: 'weekly' },
		{ label: 'Місяць', value: 'monthly' },
		{ label: 'Рік', value: 'yearly' },
	];
}
