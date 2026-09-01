import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-guides.component').then((m) => m.ForGuidesComponent),
	},
];
