import { Component } from "@angular/core";

import { HeaderComponent } from "@app/shared/modules/header/header.component";

@Component({
    selector: "app-company",
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: "./company.component.html",
    styleUrl: "./company.component.scss",
})
export class CompanyComponent {}
