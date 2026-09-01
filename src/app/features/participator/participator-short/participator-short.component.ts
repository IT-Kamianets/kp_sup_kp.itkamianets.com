import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { ParticipatorRankingEntry } from '../participator.interface';

@Component({
	selector: 'app-participator-short',
	standalone: true,
	imports: [CommonModule, RouterLink, TagModule],
	templateUrl: './participator-short.component.html',
	styleUrl: './participator-short.component.scss',
})
export class ParticipatorShortComponent {
	@Input() entity!: ParticipatorRankingEntry;
	@Input() position!: number;

	get queryUsername(): string {
		return this.entity.username.replace(/^@/, '');
	}
}
