import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateDirective } from '@wawjs/ngx-translate';

interface Participator {
	username: string;
	name: string;
	points: number;
	achievements: { place: 1 | 2 | 3; period: string; label: string }[];
	stories: { title: string; url: string }[];
}

const MEMBERS: Record<string, Participator> = {
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

const FALLBACK_MEMBER = MEMBERS['olena.paddle'];

@Component({
	imports: [TranslateDirective],
	templateUrl: './participator.component.html',
	styleUrl: './participator.component.scss',
})
export class ParticipatorComponent {
	private readonly route = inject(ActivatedRoute);
	private readonly metaService = inject(MetaService);
	protected readonly member = computed(
		() => MEMBERS[this.route.snapshot.queryParamMap.get('username') ?? ''] ?? FALLBACK_MEMBER,
	);

	constructor() {
		const member = this.member();
		this.metaService.applyMeta({
			title: member.username,
			description: this.getDescription(member),
			robots: 'noindex, follow',
		});
	}

	private getDescription(member: Participator) {
		const achievements = member.achievements.length
			? `Досягнення: ${member.achievements.map((item) => `${item.label} — ${item.period}`).join('; ')}.`
			: '';
		const stories = member.stories.length
			? ` Історії: ${member.stories.map((story) => story.title).join(', ')}.`
			: '';

		return `${member.username}. ${achievements}${stories}`.trim();
	}
}
