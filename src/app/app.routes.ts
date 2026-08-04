import { Routes } from '@angular/router';
import { buildAbsoluteUrl, buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

export const routes: Routes = [
	{
		path: '',
		data: {
			seoKeywords: companyProfile.pageSeo['/']?.keywords?.join(', '),
			meta: {
				...buildRouteMeta(companyProfile, '/'),
				title: companyProfile.pageSeo['/']?.title,
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'rules',
		data: {
			seoKeywords:
				'правила SUP, безпека на SUP, правила користування SUP, SUP Дністер, безпека на воді, відповідальність за SUP спорядження',
			meta: {
				title: 'Правила безпеки та користування SUP',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Правила участі в SUP-прогулянках KP - SUP - KP, вимоги безпеки на воді, умови користування спорядженням та відповідальність учасників.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/rules.png'),
				robots: 'index, follow',
			},
		},
		loadComponent: () => import('./pages/rules/rules.component').then((m) => m.RulesComponent),
	},
	{
		path: 'map',
		data: {
			seoKeywords:
				'SUP карта Дністра, маршрути SUP Кам’янець-Подільський, карта сап маршрутів, вітер на Дністрі, SUP локації, сплав Дністром, зупинки на Дністрі',
			meta: {
				title: 'Карта SUP-маршрутів на Дністрі та прогноз вітру',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Переглядайте SUP-маршрути KP - SUP - KP на інтерактивній карті Дністра. Стартові точки, фініші, зупинки, цікаві локації, напрямок і швидкість вітру.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/map.png'),
				robots: 'index, follow',
			},
		},
		loadComponent: () => import('./pages/map/map.component').then((m) => m.MapComponent),
	},
	{
		path: 'book',
		data: {
			seoKeywords:
				'забронювати SUP, бронювання сапів, SUP Кам’янець-Подільський, SUP Дністер, прогулянка на сапах, SUP маршрут, активний відпочинок на Дністрі',
			meta: {
				title: 'Забронювати SUP-прогулянку на Дністрі',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Оберіть дату, час і маршрут SUP-прогулянки на Дністрі. Мінімальна тривалість — 3 години. Групи до 4 осіб, трансфер із Кам’янця-Подільського.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/book.png'),
				robots: 'index, follow',
			},
		},
		loadComponent: () =>
			import('./pages/booking/booking.component').then((m) => m.BookingComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
