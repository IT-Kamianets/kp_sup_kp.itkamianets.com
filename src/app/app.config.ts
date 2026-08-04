import {
	APP_INITIALIZER,
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
	buildAbsoluteUrl,
	buildSeoTitleSuffix,
	provideNgxDefaultSeo,
	stripTitleSuffix,
} from '@wawjs/ngx-default';
import { provideNgxCore } from '@wawjs/ngx-core';
import { provideTranslate } from '@wawjs/ngx-translate';
import { provideNgxUi } from '@wawjs/ngx-ui';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { BootstrapService } from './feature/bootstrap/bootstrap.service';
import { companyProfile } from './feature/company/company.data';

const initializeBootstrapData = (bootstrapService: BootstrapService) => () =>
	bootstrapService.initialize();

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideHttpClient(withFetch()),
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
				primary: '#7fa88d',
				primaryHover: '#668f76',
				secondary: '#5a9b8a',
				secondaryHover: '#457e70',
				textPrimary: '#42584b',
				textSecondary: '#2d4a3a',
				textMuted: '#5f7063',
				placeholder: '#5f7063',
				bgPrimary: '#f4efe3',
				bgSecondary: '#fbf7ee',
				bgTertiary: '#e8dcc8',
				border: '#d4c9b2',
				onPrimary: '#173126',
				focusRing: '0 0 0 3px rgba(127, 168, 141, 0.45)',
				shadowSm: '0 4px 14px rgba(45, 74, 58, 0.07)',
				shadowMd: '0 12px 26px rgba(45, 74, 58, 0.10)',
			},
			darkTokens: {
				primary: '#ff2d92',
				primaryHover: '#ff5aaa',
				secondary: '#36e3ff',
				secondaryHover: '#75ecff',
				textPrimary: '#c8c5d8',
				textSecondary: '#f2effb',
				textMuted: '#7a7898',
				placeholder: '#7a7898',
				bgPrimary: '#0a0a0f',
				bgSecondary: '#14141c',
				bgTertiary: '#1e1e2a',
				border: '#2a2a3a',
				onPrimary: '#0a0a0f',
				focusRing: '0 0 0 3px rgba(54, 227, 255, 0.45)',
				shadowSm: '0 0 18px rgba(54, 227, 255, 0.08)',
				shadowMd: '0 0 40px rgba(255, 45, 146, 0.18)',
			},
		}),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideTranslate({
			defaultLanguage: environment.defaultLanguage,
			languages: environment.languages,
			folder: '/i18n/',
		}),
		{
			provide: APP_INITIALIZER,
			useFactory: initializeBootstrapData,
			deps: [BootstrapService],
			multi: true,
		},
	],
};
