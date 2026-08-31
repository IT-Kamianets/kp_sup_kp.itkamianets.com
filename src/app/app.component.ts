import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CanonicalService } from '@wawjs/ngx-default';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ToastModule } from '@wawjs/ngx-prime/toast';
import { LanguageService, TranslateDirective } from '@wawjs/ngx-translate';
import { filter } from 'rxjs';
import { environment } from '../environments/environment';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ThemeState } from './theme/app.theme';

@Component({
	selector: 'app-root',
	imports: [
		RouterLink,
		RouterOutlet,
		TopbarComponent,
		FooterComponent,
		TranslateDirective,
		ToastModule,
	],
	providers: [MessageService],
	template: `
		<div [class]="appClass()">
			<app-topbar />
			<main [class]="mainClass()">
				<router-outlet />
			</main>
			<app-footer [class]="webFooterClass()" />
			<p-toast />
			<nav
				class="mobile-nav fixed inset-x-0 bottom-0 z-[1000] flex items-center justify-between border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)]/95 px-4 py-2 backdrop-blur md:hidden"
				aria-label="Primary navigation"
			>
				<a [class]="mobileNavClass('/rules')" routerLink="/rules" translate="Правила"
					>Правила</a
				>
				<a [class]="mobileNavClass('/ranking')" routerLink="/ranking" translate="Рейтинг"
					>Рейтинг</a
				>
				<a [class]="mobileNavClass('/map')" routerLink="/map" translate="Карта">Карта</a>
				<a [class]="mobileNavClass('/book')" routerLink="/book" translate="Бронювання"
					>Бронювання</a
				>
			</nav>
		</div>
	`,
})
export class App {
	private readonly _canonicalService = inject(CanonicalService);
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);
	private readonly _meta = inject(Meta);
	private readonly _router = inject(Router);
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _destroyRef = inject(DestroyRef);
	private readonly _themeState = inject(ThemeState);
	private readonly _url = signal(this._router.url);
	protected readonly currentPath = computed(() => this._url().split(/[?#]/)[0]);
	protected readonly isMapPage = computed(() => this.currentPath() === '/map');
	protected readonly isChallengesPage = computed(() => this.currentPath() === '/challenges');
	protected readonly showWebFooter = computed(() =>
		['', '/', '/rules'].includes(this.currentPath()),
	);
	protected readonly webFooterClass = computed(() =>
		this.showWebFooter() ? 'hidden md:block' : 'hidden',
	);
	protected readonly appClass = computed(() =>
		this.isMapPage() || this.isChallengesPage()
			? 'flex h-screen flex-col overflow-hidden pt-16'
			: 'flex min-h-screen flex-col pt-16',
	);
	protected readonly mainClass = computed(() =>
		this.isMapPage() || this.isChallengesPage()
			? 'min-h-0 flex-1 overflow-hidden'
			: 'flex-1 pb-14 md:pb-0',
	);

	constructor() {
		this._canonicalService.initialize();
		this._router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe((event) => {
				this._url.set(event.urlAfterRedirects);
				this._updateRouteSeoExtras(event.urlAfterRedirects);
			});

		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? language;

			if (htmlLang) {
				this._document.documentElement.lang = htmlLang;
			}
		});
	}

	protected mobileNavClass(path: string): string {
		const color =
			this.currentPath() === path ? 'text-[var(--c-primary)]' : 'text-[var(--c-text)]';
		return `theme-focus flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-1 py-2 text-center text-xs font-semibold sm:gap-2 sm:px-3 sm:text-sm ${color}`;
	}

	private _updateRouteSeoExtras(url: string): void {
		let route = this._activatedRoute;
		while (route.firstChild) {
			route = route.firstChild;
		}

		const keywords = route.snapshot.data['seoKeywords'];
		if (typeof keywords === 'string' && keywords.length > 0) {
			this._meta.updateTag({ name: 'keywords', content: keywords });
		} else {
			this._meta.removeTag('name="keywords"');
		}

		const path = url.split(/[?#]/)[0] || '/';
		const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
		this._meta.updateTag({
			property: 'og:url',
			content: `https://kp_sup_kp.itkamianets.com${normalizedPath}`,
		});
	}
}
