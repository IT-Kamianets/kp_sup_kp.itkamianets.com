import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

interface BookingRoute {
	id: string;
	name: string;
	duration: string;
	price: number | null;
	difficulty: string;
}

interface TimeSlot {
	startHour: number;
	start: string;
	minimumFinish: string;
}

const BOOKING_ROUTES: BookingRoute[] = [
	{
		id: 'dnister',
		name: 'SUP-маршрут Дністром',
		duration: 'від 3 годин',
		price: null,
		difficulty: 'підходить новачкам',
	},
];

const TIME_SLOTS: TimeSlot[] = Array.from({ length: 8 }, (_, index) => {
	const startHour = index + 8;

	return {
		startHour,
		start: _formatHour(startHour),
		minimumFinish: _formatHour(startHour + 3),
	};
});

@Component({
	templateUrl: './booking.component.html',
	styleUrl: './booking.component.scss',
})
export class BookingComponent {
	private readonly _http = inject(HttpClient);

	protected readonly ready = signal(false);
	protected readonly today = signal(new Date(2000, 0, 1));
	protected readonly routes = BOOKING_ROUTES;
	protected readonly slots = TIME_SLOTS;
	protected readonly todayIso = computed(() => _toIsoDate(this.today()));
	protected readonly tomorrowIso = computed(() => _toIsoDate(_addDays(this.today(), 1)));
	protected readonly selectedDate = signal(new Date(2000, 0, 1));
	protected readonly selectedStartHour = signal<number | null>(null);
	protected readonly routeId = signal(BOOKING_ROUTES[0].id);
	protected readonly duration = signal(3);
	protected readonly customDuration = signal(3);
	protected readonly people = signal(1);
	protected readonly children = signal(0);
	protected readonly childAges = signal<number[]>([]);
	protected readonly name = signal('');
	protected readonly phone = signal('');
	protected readonly comment = signal('');
	protected readonly rulesAccepted = signal(false);
	protected readonly guardianAccepted = signal(false);
	protected readonly mediaAccepted = signal(false);
	protected readonly submitting = signal(false);
	protected readonly submissionSuccess = signal(false);
	protected readonly submissionError = signal('');

	protected readonly selectedDateIso = computed(() => _toIsoDate(this.selectedDate()));
	protected readonly selectedDateLabel = computed(() =>
		new Intl.DateTimeFormat('uk-UA', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
		}).format(this.selectedDate()),
	);
	protected readonly selectedRoute = computed(
		() => this.routes.find((route) => route.id === this.routeId()) ?? this.routes[0],
	);
	protected readonly actualDuration = computed(() =>
		this.duration() === 0 ? Math.max(3, this.customDuration()) : this.duration(),
	);
	protected readonly selectedTimeRange = computed(() => {
		const start = this.selectedStartHour();
		return start === null
			? ''
			: `${_formatHour(start)}–${_formatHour(start + this.actualDuration())}`;
	});
	protected readonly adults = computed(() => this.people() - this.children());
	protected readonly childIndexes = computed(() =>
		Array.from({ length: this.children() }, (_, index) => index),
	);
	protected readonly totalCost = computed(() => {
		const price = this.selectedRoute().price;
		return price === null ? 'Уточнюється' : `${price * this.people()} ₴`;
	});
	protected readonly nameValid = computed(() => this.name().trim().length >= 2);
	protected readonly phoneValid = computed(() => _isValidUkrainianPhone(this.phone()));
	protected readonly canContinue = computed(
		() =>
			this.nameValid() &&
			this.phoneValid() &&
			this.rulesAccepted() &&
			(this.children() === 0 || this.guardianAccepted()) &&
			!this.submitting() &&
			!this.submissionSuccess(),
	);
	protected readonly bookingMessage = computed(() => {
		const route = this.selectedRoute();
		return [
			'Нове бронювання SUP-пригоди',
			'',
			`Дата: ${this.selectedDateLabel()}`,
			`Час: ${this.selectedTimeRange() || 'не обрано'}`,
			`Маршрут: ${route.name}`,
			`Тривалість: ${this.actualDuration()} год.`,
			`Дорослих: ${this.adults()}`,
			`Дітей: ${this.children()}`,
			`Вік дітей: ${this.childAges().join(', ') || '—'}`,
			`Ім’я: ${this.name() || '—'}`,
			`Телефон: ${this.phone() || '—'}`,
			`Коментар: ${this.comment() || '—'}`,
			`Правила прийнято: ${this.rulesAccepted() ? 'так' : 'ні'}`,
			`Згода представника дітей: ${this.children() === 0 ? 'не застосовується' : this.guardianAccepted() ? 'так' : 'ні'}`,
			`Дозвіл на фото та відео: ${this.mediaAccepted() ? 'так' : 'ні'}`,
		].join('\n');
	});

	constructor() {
		afterNextRender(() => {
			const today = _startOfDay(new Date());
			this.today.set(today);
			this.selectedDate.set(today);
			this.ready.set(true);
		});
	}

	protected selectToday(): void {
		this._selectDate(this.today());
	}

	protected selectTomorrow(): void {
		this._selectDate(_addDays(this.today(), 1));
	}

	protected selectDate(value: string): void {
		if (!value) {
			return;
		}

		const date = _fromIsoDate(value);
		if (date >= this.today()) {
			this._selectDate(date);
		}
	}

	protected selectSlot(slot: TimeSlot): void {
		if (!this.isPastSlot(slot)) {
			this.selectedStartHour.set(slot.startHour);
		}
	}

	protected isPastSlot(slot: TimeSlot): boolean {
		const selected = this.selectedDate();
		const today = this.today();
		if (selected.getTime() !== today.getTime()) {
			return selected < today;
		}

		return slot.startHour <= new Date().getHours();
	}

	protected setPeople(value: number): void {
		const people = _clamp(value, 1, 4);
		this.people.set(people);
		if (this.children() > people) {
			this.setChildren(people);
		}
	}

	protected setChildren(value: number): void {
		const children = _clamp(value, 0, this.people());
		this.children.set(children);
		this.childAges.update((ages) =>
			Array.from({ length: children }, (_, index) => ages[index] ?? 6),
		);
	}

	protected setChildAge(index: number, value: number): void {
		this.childAges.update((ages) =>
			ages.map((age, ageIndex) => (ageIndex === index ? value : age)),
		);
	}

	protected submitBooking(): void {
		if (!this.canContinue()) {
			return;
		}

		this.submitting.set(true);
		this.submissionError.set('');

		this._http
			.post<boolean>(`${environment.apiUrl}/api/telegram/contact`, {
				message: this.bookingMessage(),
				slug: environment.companyId,
			})
			.subscribe({
				next: (success) => {
					this.submitting.set(false);
					if (success === true) {
						this.submissionSuccess.set(true);
						return;
					}

					this.submissionError.set(
						'Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.',
					);
				},
				error: () => {
					this.submitting.set(false);
					this.submissionError.set(
						'Не вдалося надіслати заявку. Перевірте з’єднання та спробуйте ще раз або зателефонуйте нам.',
					);
				},
			});
	}

	private _selectDate(date: Date): void {
		this.selectedDate.set(_startOfDay(date));
		this.selectedStartHour.set(null);
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

function _fromIsoDate(value: string): Date {
	const [year, month, day] = value.split('-').map(Number);
	return new Date(year, month - 1, day);
}

function _formatHour(hour: number): string {
	return `${String(hour).padStart(2, '0')}:00`;
}

function _clamp(value: number, minimum: number, maximum: number): number {
	return Math.min(maximum, Math.max(minimum, value));
}

function _isValidUkrainianPhone(value: string): boolean {
	const digits = value.replace(/\D/g, '');
	return /^380\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
}
