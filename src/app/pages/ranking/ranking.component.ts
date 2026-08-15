import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

type RankingPeriod = 'weekly' | 'monthly' | 'yearly';

interface RankingEntry {
	name: string;
	points: number;
}

const RANKINGS: Record<RankingPeriod, RankingEntry[]> = {
	weekly: [
		{ name: '@olena.paddle', points: 124 },
		{ name: '@andrii.river', points: 108 },
		{ name: '@marta.sup', points: 96 },
		{ name: '@dmytro.dnister', points: 82 },
		{ name: '@iryna.flow', points: 73 },
	],
	monthly: [
		{ name: '@andrii.river', points: 468 },
		{ name: '@olena.paddle', points: 442 },
		{ name: '@dmytro.dnister', points: 394 },
		{ name: '@iryna.flow', points: 378 },
		{ name: '@marta.sup', points: 351 },
	],
	yearly: [
		{ name: '@dmytro.dnister', points: 2140 },
		{ name: '@andrii.river', points: 2035 },
		{ name: '@olena.paddle', points: 1988 },
		{ name: '@marta.sup', points: 1742 },
		{ name: '@iryna.flow', points: 1690 },
	],
};

@Component({
	imports: [RouterLink, TranslateDirective],
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
