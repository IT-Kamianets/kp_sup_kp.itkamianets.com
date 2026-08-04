import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CanonicalService } from '@wawjs/ngx-default';
import { LanguageService } from '@wawjs/ngx-translate';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
	template: `
		<div class="flex min-h-screen flex-col">
			<app-topbar />
			<main class="flex-1">
				<router-outlet />
			</main>
			<app-footer />
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

	constructor() {
		this._canonicalService.initialize();
		this._router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe((event) => this._updateRouteSeoExtras(event.urlAfterRedirects));

		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? language;

			if (htmlLang) {
				this._document.documentElement.lang = htmlLang;
			}
		});
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
