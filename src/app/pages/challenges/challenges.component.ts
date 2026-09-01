import { Component, computed, effect, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { ChallengeShortComponent } from '../../features/challenge/challenge-short/challenge-short.component';
import { Challenge } from '../../features/challenge/challenge.interface';
import { challenges } from '../../features/challenge/challenge.data';

@Component({
	imports: [ButtonModule, ChallengeShortComponent],
	templateUrl: './challenges.component.html',
	styleUrl: './challenges.component.scss',
})
export class ChallengesComponent {
	private readonly _translateService = inject(TranslateService);
	private _startY = 0;
	private _lastWheelAdvance = 0;
	private _remaining = _shuffle([...challenges]);
	protected readonly activeChallenge = signal<Challenge>(this._drawChallenge());
	protected readonly nextChallenge = signal<Challenge>(this._drawChallenge());
	protected readonly isAdvancing = signal(false);
	protected readonly isResetting = signal(false);
	protected readonly activeChallengeView = computed(() => this._translateEntity(this.activeChallenge()));
	protected readonly nextChallengeView = computed(() => this._translateEntity(this.nextChallenge()));

	constructor() {
		effect(() => {
			void this._translateService.loadExtraTranslations(
				['/data/points/i18n/', '/data/challenges/i18n/'],
				{
					language: this._translateService.language(),
				},
			);
		});
	}

	protected onPointerStart(event: PointerEvent): void {
		this._startY = event.clientY;
	}

	protected onPointerEnd(event: PointerEvent): void {
		if (this._startY - event.clientY >= 48) this.advanceChallenge();
	}

	protected onWheel(event: WheelEvent): void {
		if (event.deltaY <= 24 || Date.now() - this._lastWheelAdvance < 500) return;
		event.preventDefault();
		this._lastWheelAdvance = Date.now();
		this.advanceChallenge();
	}

	protected advanceChallenge(): void {
		if (this.isAdvancing()) return;
		this.isAdvancing.set(true);
		setTimeout(() => {
			this.isResetting.set(true);
			this.activeChallenge.set(this.nextChallenge());
			this.nextChallenge.set(this._drawChallenge());
			this.isAdvancing.set(false);
			requestAnimationFrame(() => requestAnimationFrame(() => this.isResetting.set(false)));
		}, 420);
	}

	protected translate(text: string): string {
		return this._translateService.translate(text)();
	}

	private _translateEntity(challenge: Challenge): Challenge {
		return {
			...challenge,
			title: this.translate(challenge.title),
			description: this.translate(challenge.description),
		};
	}

	private _drawChallenge(): Challenge {
		if (!this._remaining.length) this._remaining = _shuffle([...challenges]);
		return this._remaining.pop()!;
	}
}

function _shuffle<T>(items: T[]): T[] {
	for (let index = items.length - 1; index > 0; index--) {
		const next = Math.floor(Math.random() * (index + 1));
		[items[index], items[next]] = [items[next]!, items[index]!];
	}
	return items;
}
