import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { PopoverModule } from '@wawjs/ngx-prime/popover';
import type { Language } from '@wawjs/ngx-translate';
import { LanguageService, TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import type { AppLanguage } from '../../../environments/environment.prod';
import { CompanyService } from '../../feature/company/company.service';
import { ThemeState } from '../../theme/app.theme';

@Component({
	selector: 'app-topbar',
	imports: [NgOptimizedImage, RouterLink, TranslateDirective, ButtonModule, PopoverModule],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
	private readonly _translateService = inject(TranslateService);
	private readonly _themeState = inject(ThemeState);
	private readonly _languageService = inject(LanguageService);
	private readonly _companyService = inject(CompanyService);
	private readonly _router = inject(Router);

	protected readonly mode = this._themeState.mode;
	protected readonly languages = computed(() =>
		this._languageService.languages().map((language) => _toAppLanguage(language)),
	);
	protected readonly company = this._companyService.company;
	protected readonly activeLanguage = this._languageService.language;
	protected readonly currentLanguage = computed(() =>
		_toAppLanguage(this._languageService.getLanguage(this.activeLanguage())),
	);
	protected readonly toggleIcon = computed(() =>
		this.mode() === 'dark' ? 'light_mode' : 'dark_mode',
	);
	protected readonly toggleLabel = computed(() => {
		this.activeLanguage();
		return this.mode() === 'dark'
			? this._translateService.translate('Увімкнути світлу тему')()
			: this._translateService.translate('Увімкнути темну тему')();
	});
	protected readonly languageMenuLabel = computed(() => {
		this.activeLanguage();
		return this._translateService.translate('Відкрити меню мов')();
	});
	protected readonly languageCycleLabel = computed(() => {
		this.activeLanguage();
		return `${this._translateService.translate('Змінити мову на')()} ${this.getNextLanguage().nativeName}`;
	});

	protected toggleMode() {
		const nextMode = this.mode() === 'dark' ? 'light' : 'dark';
		this._themeState.setMode(nextMode);
	}

	protected async nextLanguage() {
		const nextLanguage = this.getNextLanguage();
		await this._translateService.setLanguage(nextLanguage.code);
		await this._router.navigateByUrl(this._router.url);
	}

	protected async setLanguage(language: AppLanguage) {
		await this._translateService.setLanguage(language.code);
		await this._router.navigateByUrl(this._router.url);
	}

	protected getNextLanguage() {
		const languages = this.languages();
		const currentCode = this.currentLanguage().code;
		const currentIndex = languages.findIndex((language) => language.code === currentCode);

		return languages[(currentIndex + 1) % languages.length] ?? languages[0]!;
	}
}

function _toAppLanguage(language: Language | undefined): AppLanguage {
	const fallback: AppLanguage = {
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flagSrc: 'flags/united-kingdom.svg',
		htmlLang: 'en',
		population: 0,
	};

	return { ...fallback, ...(language as Partial<AppLanguage> | undefined) };
}
