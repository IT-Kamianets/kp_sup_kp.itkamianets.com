import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideNgxCore } from '@wawjs/ngx-core';
import {
	buildAbsoluteUrl,
	buildSeoTitleSuffix,
	provideNgxDefaultSeo,
	stripTitleSuffix,
} from '@wawjs/ngx-default';
import { provideTranslate } from '@wawjs/ngx-translate';
import { provideNgxUi } from '@wawjs/ngx-ui';
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
		provideNgxUi({
			mode: 'light',
			modes: ['light', 'dark'],
			persist: true,
			tokens: {
				ffBase: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
			},
			lightTokens: {
				primary: '#0284c7',
				primaryHover: '#0369a1',
				secondary: '#0ea5e9',
				secondaryHover: '#0284c7',
				textPrimary: '#164e63',
				textSecondary: '#0c4a6e',
				textMuted: '#4b6b78',
				placeholder: '#4b6b78',
				bgPrimary: '#f4efe3',
				bgSecondary: '#fbf7ee',
				bgTertiary: '#e8dcc8',
				border: '#d4c9b2',
				onPrimary: '#173126',
				focusRing: '0 0 0 3px rgba(14, 165, 233, 0.45)',
				shadowSm: '0 4px 14px rgba(12, 74, 110, 0.07)',
				shadowMd: '0 12px 26px rgba(12, 74, 110, 0.10)',
			},
			darkTokens: {
				primary: '#38bdf8',
				primaryHover: '#7dd3fc',
				secondary: '#22d3ee',
				secondaryHover: '#67e8f9',
				textPrimary: '#c8c5d8',
				textSecondary: '#f2effb',
				textMuted: '#7a7898',
				placeholder: '#7a7898',
				bgPrimary: '#0a0a0f',
				bgSecondary: '#14141c',
				bgTertiary: '#1e1e2a',
				border: '#2a2a3a',
				onPrimary: '#06131b',
				focusRing: '0 0 0 3px rgba(56, 189, 248, 0.45)',
				shadowSm: '0 0 18px rgba(34, 211, 238, 0.08)',
				shadowMd: '0 0 40px rgba(56, 189, 248, 0.18)',
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
