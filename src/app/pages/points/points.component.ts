import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataViewModule } from '@wawjs/ngx-prime/dataview';
import { MessageModule } from '@wawjs/ngx-prime/message';
import { ProgressBarModule } from '@wawjs/ngx-prime/progressbar';
import { TranslateService } from '@wawjs/ngx-translate';
import { ChallengeShortComponent } from '../../features/challenge/challenge-short/challenge-short.component';
import { challenges } from '../../features/challenge/challenge.data';

@Component({
	imports: [RouterLink, ChallengeShortComponent, DataViewModule, ProgressBarModule, MessageModule],
	templateUrl: './points.component.html',
	styleUrl: './points.component.scss',
})
export class PointsComponent {
	private readonly _translateService = inject(TranslateService);
	protected readonly challenges = computed(() =>
		challenges.map((challenge) => ({
			...challenge,
			title: this.translate(challenge.title),
			description: this.translate(challenge.description),
		})),
	);
	// FABRICATED: no real "current points earned" state exists yet on this page.
	// Placeholder computed as the sum of the three highest-value example challenges
	// capped at the 100-point maximum, just to drive a real ProgressBar instead of
	// the previous fake `width: 82%` bar.
	protected readonly currentPoints = computed(() => {
		const topThree = [...this.challenges()]
			.map((challenge) => challenge.points)
			.sort((a, b) => b - a)
			.slice(0, 3)
			.reduce((sum, points) => sum + points, 0);
		return Math.min(topThree, 100);
	});

	constructor() {
		effect(() => {
			void this._translateService.loadExtraTranslation('/data/points/i18n/', {
				language: this._translateService.language(),
			});
		});
	}

	protected translate(text: string): string {
		return this._translateService.translate(text)();
	}
}
