import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { MessageModule } from '@wawjs/ngx-prime/message';
import { ParticipatorViewComponent } from '../../features/participator/participator-view/participator-view.component';
import { FALLBACK_PARTICIPATOR, PARTICIPATORS } from '../../features/participator/participator.data';
import { Participator } from '../../features/participator/participator.interface';

@Component({
	imports: [TranslateDirective, MessageModule, ParticipatorViewComponent],
	templateUrl: './participator.component.html',
	styleUrl: './participator.component.scss',
})
export class ParticipatorComponent {
	private readonly route = inject(ActivatedRoute);
	private readonly metaService = inject(MetaService);

	private readonly requestedUsername = this.route.snapshot.queryParamMap.get('username') ?? '';
	protected readonly found = !!PARTICIPATORS[this.requestedUsername];
	protected readonly participator = computed(
		() => PARTICIPATORS[this.requestedUsername] ?? FALLBACK_PARTICIPATOR,
	);

	constructor() {
		const participator = this.participator();
		this.metaService.applyMeta({
			title: participator.username,
			description: this.getDescription(participator),
			robots: 'noindex, follow',
		});
	}

	private getDescription(participator: Participator) {
		const achievements = participator.achievements.length
			? `Досягнення: ${participator.achievements.map((item) => `${item.label} — ${item.period}`).join('; ')}.`
			: '';
		const stories = participator.stories.length
			? ` Історії: ${participator.stories.map((story) => story.title).join(', ')}.`
			: '';

		return `${participator.username}. ${achievements}${stories}`.trim();
	}
}
