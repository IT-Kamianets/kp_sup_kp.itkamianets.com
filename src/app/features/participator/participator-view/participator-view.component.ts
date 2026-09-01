import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { Participator } from '../participator.interface';

const MEDALS: Record<1 | 2 | 3, string> = {
	1: '🥇',
	2: '🥈',
	3: '🥉',
};

@Component({
	selector: 'app-participator-view',
	standalone: true,
	imports: [CommonModule, AvatarModule, TagModule],
	templateUrl: './participator-view.component.html',
	styleUrl: './participator-view.component.scss',
})
export class ParticipatorViewComponent {
	@Input() entity!: Participator;

	readonly medals = MEDALS;
}
