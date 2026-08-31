import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { Challenge } from '../challenge.interface';

@Component({
	selector: 'app-challenge-short',
	standalone: true,
	imports: [CommonModule, TagModule],
	templateUrl: './challenge-short.component.html',
	styleUrl: './challenge-short.component.scss',
})
export class ChallengeShortComponent {
	@Input() entity!: Challenge;
	@Input() variant: 'row' | 'card' = 'row';
}
