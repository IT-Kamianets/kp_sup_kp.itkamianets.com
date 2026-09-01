import { Component, computed, inject, signal } from '@angular/core';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { JourneyShortComponent } from '../../features/journey/journey-short/journey-short.component';
import { journeys } from '../../features/journey/journey.data';
import { JourneyOption } from '../../features/journey/journey.interface';

interface BookingDate {
	label: string;
	value: string;
}

interface ExistingBooking {
	end: number;
	start: number;
}

const START_HOURS = Array.from({ length: 11 }, (_, index) => index + 8);

@Component({
	imports: [ButtonModule, InputTextModule, JourneyShortComponent],
	templateUrl: './booking.component.html',
	styleUrl: './booking.component.scss',
})
export class BookingComponent {
	private readonly _messageService = inject(MessageService);
	private readonly _today = _startOfDay(new Date());
	protected readonly selectedDate = signal(_toIsoDate(this._today));
	protected readonly selectedJourney = signal<string | null>(null);
	protected readonly selectedStartHour = signal<number | null>(null);
	protected readonly name = signal('');
	protected readonly phone = signal('');
	protected readonly submitted = signal(false);
	protected readonly journeys: JourneyOption[] = journeys;
	protected readonly selectedJourneyOption = computed(() =>
		this.journeys.find((journey) => journey.id === this.selectedJourney()),
	);
	protected readonly bookings = computed<ExistingBooking[]>(() => {
		if (this.selectedDate() === _toIsoDate(this._today)) return [{ start: 15, end: 18 }];
		if (this.selectedDate() === _toIsoDate(_addDays(this._today, 1)))
			return [{ start: 11, end: 14 }];
		return [];
	});
	protected readonly startHours = START_HOURS;
	protected readonly dates = computed<BookingDate[]>(() => [
		{ label: 'Сьогодні', value: _toIsoDate(this._today) },
		{ label: 'Завтра', value: _toIsoDate(_addDays(this._today, 1)) },
		...Array.from({ length: 12 }, (_, index) => {
			const date = _addDays(this._today, index + 2);
			return {
				label: String(date.getDate()),
				value: _toIsoDate(date),
			};
		}),
	]);

	protected selectDate(value: string): void {
		this.selectedDate.set(value);
		this.selectedStartHour.set(null);
	}

	protected selectJourney(id: string): void {
		this.selectedJourney.set(id);
		this.selectedStartHour.set(null);
	}

	protected clearJourney(): void {
		this.selectedJourney.set(null);
		this.selectedStartHour.set(null);
	}

	protected isStartAvailable(start: number): boolean {
		const duration = Number.parseInt(this.selectedJourneyOption()?.duration ?? '0', 10);
		return this.bookings().every(
			(booking) => start + duration + 1 <= booking.start || booking.end + 1 <= start,
		);
	}

	protected submit(): void {
		if (this.name().trim() && this.phone().trim()) {
			this.submitted.set(true);
			this._messageService.add({
				severity: 'success',
				summary: 'Готово',
				detail: 'Вашу заявку на бронювання готово до надсилання.',
			});
		}
	}
}

function _startOfDay(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function _addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function _toIsoDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}
