import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import Aura from '@wawjs/css-prime-themes/aura';
import { provideNgxCore } from '@wawjs/ngx-core';
import {
	buildAbsoluteUrl,
	buildSeoTitleSuffix,
	provideNgxDefaultSeo,
	stripTitleSuffix,
} from '@wawjs/ngx-default';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';
import { provideTranslate } from '@wawjs/ngx-translate';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { companyProfile } from './feature/company/company.data';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideNgxCore({
			meta: {
				applyFromRoutes: true,
				useTitleSuffix: true,
				defaults: {
					title: stripTitleSuffix(companyProfile.defaultSeo.title, companyProfile.name),
					titleSuffix: buildSeoTitleSuffix(companyProfile),
					description: companyProfile.defaultSeo.description,
					image: buildAbsoluteUrl(
						companyProfile.siteUrl,
						companyProfile.defaultSeo.image,
					),
					robots: companyProfile.defaultSeo.robots,
				},
			},
		}),
		provideNgxDefaultSeo({
			siteUrl: companyProfile.siteUrl,
		}),
		provideNgxPrime({
			theme: {
				preset: Aura,
				options: { darkModeSelector: "[data-mode='dark']" },
			},
		}),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideTranslate({
			defaultLanguage: 'ua',
			language: 'ua',
			persistLanguage: true,
			languages: [
				...environment.languages.filter((language) => language.code === 'ua'),
				...environment.languages.filter((language) => language.code !== 'ua'),
			],
			folder: '/i18n/',
		}),
	],
};
