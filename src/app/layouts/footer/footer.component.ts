import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../feature/company/company.service';

@Component({
	selector: 'app-footer',
	imports: [RouterLink],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	protected readonly company = inject(CompanyService).company;
}
