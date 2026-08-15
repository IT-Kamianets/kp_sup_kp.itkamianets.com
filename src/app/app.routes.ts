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
		path: 'challenges',
		data: {
			meta: {
				title: 'Випадковий SUP-челендж',
				titleSuffix: ' | KP - SUP - KP',
				description: 'Отримай випадковий SUP-челендж для своєї пригоди на Дністрі.',
				robots: 'index, follow',
				canonicalPath: '/challenges',
			},
		},
		loadComponent: () => import('./pages/challenges/challenges.component').then((m) => m.ChallengesComponent),
	},
	{
		path: 'points',
		data: {
			seoKeywords: 'SUP челенджі, бали за SUP, SUP Stories, SUP Дністер, KP SUP KP',
			meta: {
				title: 'SUP челенджі та бали',
				titleSuffix: ' | KP - SUP - KP',
				description: 'Виконуй SUP-челенджі на Дністрі, знімай Stories та заробляй до 100 балів за одну SUP-пригоду з KP - SUP - KP.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/home.png'),
				robots: 'index, follow',
				canonicalPath: '/points',
			},
		},
		loadComponent: () => import('./pages/points/points.component').then((m) => m.PointsComponent),
	},
	{
		path: 'rules',
		data: {
			seoKeywords:
				'правила SUP, безпека на SUP, правила користування SUP, SUP Дністер, безпека на воді, відповідальність за SUP спорядження',
			meta: {
				title: 'Правила безпеки для SUP-прогулянок',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Правила безпеки для SUP-прогулянок на Дністрі: спорядження, поведінка на воді, погодні умови та відповідальність учасників.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/rules.png'),
				robots: 'index, follow',
				canonicalPath: '/rules',
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
				title: 'Карта SUP-маршрутів на Дністрі',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Інтерактивна карта перевірених SUP-маршрутів на Дністрі: стартові точки, фініші та зручне планування водної пригоди.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/map.png'),
				robots: 'index, follow',
				canonicalPath: '/map',
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
				title: 'Бронювання SUP-прогулянки на Дністрі',
				titleSuffix: ' | KP - SUP - KP',
				description:
					'Оберіть дату, час і маршрут для SUP-прогулянки на Дністрі. Невеликі групи, спорядження та трансфер із Кам’янця-Подільського.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/book.png'),
				robots: 'index, follow',
				canonicalPath: '/book',
			},
		},
		loadComponent: () =>
			import('./pages/booking/booking.component').then((m) => m.BookingComponent),
	},
	{
		path: 'ranking',
		data: {
			seoKeywords: 'SUP рейтинг, рейтинг SUP учасників, SUP Дністер, SUP Кам’янець-Подільський',
			meta: {
				title: 'Рейтинг учасників SUP-пригод',
				titleSuffix: ' | KP - SUP - KP',
				description: 'Рейтинг учасників SUP-пригод на Дністрі за тиждень, місяць і рік.',
				image: buildAbsoluteUrl(companyProfile.siteUrl, '/social/home.png'),
				robots: 'index, follow',
				canonicalPath: '/ranking',
			},
		},
		loadComponent: () =>
			import('./pages/ranking/ranking.component').then((m) => m.RankingComponent),
	},
	{
		path: 'participator',
		data: {
			meta: {
				title: 'Профіль учасника SUP',
				titleSuffix: ' | KP - SUP - KP',
				description: 'Досягнення, рейтинг та історії учасника SUP-пригод на Дністрі.',
				robots: 'noindex, follow',
				canonicalPath: '/participator',
			},
		},
		loadComponent: () =>
			import('./pages/participator/participator.component').then((m) => m.ParticipatorComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
