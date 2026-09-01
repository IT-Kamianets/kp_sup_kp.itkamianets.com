import { Participator, ParticipatorRankingEntry, RankingPeriod } from './participator.interface';

/** Keyed by the handle without the leading `@`, matching the `?username=` query param. */
export const PARTICIPATORS: Record<string, Participator> = {
	'olena.paddle': {
		username: '@olena.paddle',
		name: 'Olena K.',
		points: 124,
		achievements: [
			{ place: 1, period: 'Тиждень 15, 2026', label: 'Перше місце' },
			{ place: 2, period: 'Серпень 2026', label: 'Друге місце' },
			{ place: 3, period: '2026', label: 'Третє місце' },
		],
		stories: [
			{ title: 'Ранок на Бакоті', url: 'https://www.instagram.com/' },
			{ title: 'Перший маршрут Дністром', url: 'https://www.instagram.com/' },
		],
	},
	'andrii.river': {
		username: '@andrii.river',
		name: 'Andrii P.',
		points: 108,
		achievements: [
			{ place: 1, period: 'Тиждень 14, 2026', label: 'Перше місце' },
			{ place: 2, period: 'Липень 2026', label: 'Друге місце' },
			{ place: 2, period: '2026', label: 'Друге місце' },
		],
		stories: [],
	},
	'marta.sup': {
		username: '@marta.sup',
		name: 'Marta S.',
		points: 96,
		achievements: [
			{ place: 1, period: 'Серпень 2026', label: 'Перше місце' },
			{ place: 3, period: 'Тиждень 15, 2026', label: 'Третє місце' },
			{ place: 3, period: '2026', label: 'Третє місце' },
		],
		stories: [{ title: 'SUP-вихідні', url: 'https://www.instagram.com/' }],
	},
	'dmytro.dnister': {
		username: '@dmytro.dnister',
		name: 'Dmytro H.',
		points: 82,
		achievements: [
			{ place: 1, period: '2026', label: 'Перше місце' },
			{ place: 2, period: 'Тиждень 13, 2026', label: 'Друге місце' },
			{ place: 3, period: 'Серпень 2026', label: 'Третє місце' },
		],
		stories: [],
	},
	'iryna.flow': {
		username: '@iryna.flow',
		name: 'Iryna F.',
		points: 73,
		achievements: [
			{ place: 1, period: 'Тиждень 12, 2026', label: 'Перше місце' },
			{ place: 2, period: '2026', label: 'Друге місце' },
			{ place: 3, period: 'Липень 2026', label: 'Третє місце' },
		],
		stories: [],
	},
};

export const FALLBACK_PARTICIPATOR: Participator = PARTICIPATORS['olena.paddle']!;

export const RANKINGS: Record<RankingPeriod, ParticipatorRankingEntry[]> = {
	weekly: [
		{ username: '@olena.paddle', points: 124 },
		{ username: '@andrii.river', points: 108 },
		{ username: '@marta.sup', points: 96 },
		{ username: '@dmytro.dnister', points: 82 },
		{ username: '@iryna.flow', points: 73 },
	],
	monthly: [
		{ username: '@andrii.river', points: 468 },
		{ username: '@olena.paddle', points: 442 },
		{ username: '@dmytro.dnister', points: 394 },
		{ username: '@iryna.flow', points: 378 },
		{ username: '@marta.sup', points: 351 },
	],
	yearly: [
		{ username: '@dmytro.dnister', points: 2140 },
		{ username: '@andrii.river', points: 2035 },
		{ username: '@olena.paddle', points: 1988 },
		{ username: '@marta.sup', points: 1742 },
		{ username: '@iryna.flow', points: 1690 },
	],
};
