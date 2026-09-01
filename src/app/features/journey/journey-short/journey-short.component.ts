import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipModule } from '@wawjs/ngx-prime/chip';
import { JourneyOption } from '../journey.interface';

@Component({
	selector: 'app-journey-short',
	standalone: true,
	imports: [CommonModule, ChipModule],
	templateUrl: './journey-short.component.html',
	styleUrl: './journey-short.component.scss',
})
export class JourneyShortComponent {
	@Input() entity!: JourneyOption;
	@Input() selected = false;
	@Input() variant: 'card' | 'chip' = 'card';
	@Output() select = new EventEmitter<void>();

	onSelect(): void {
		this.select.emit();
	}
}
