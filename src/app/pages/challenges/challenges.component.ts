import { Component, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';
import { POINT_CHALLENGES, type PointChallenge } from '../../../data/points/challenges.data';

@Component({
	templateUrl: './challenges.component.html',
	styleUrl: './challenges.component.scss',
})
export class ChallengesComponent {
	private readonly _translateService = inject(TranslateService);
	private _startY = 0;
	private _lastWheelAdvance = 0;
	private _remaining = _shuffle([...POINT_CHALLENGES]);
	protected readonly activeChallenge = signal<PointChallenge>(this._drawChallenge());
	protected readonly nextChallenge = signal<PointChallenge>(this._drawChallenge());
	protected readonly isAdvancing = signal(false);
	protected readonly isResetting = signal(false);

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

	private _drawChallenge(): PointChallenge {
		if (!this._remaining.length) this._remaining = _shuffle([...POINT_CHALLENGES]);
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
