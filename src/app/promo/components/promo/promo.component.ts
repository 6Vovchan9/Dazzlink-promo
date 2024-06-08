import { Component } from "@angular/core";
import { FooterComponent } from "@app/shared/modules/footer/footer.component";

import { HeaderComponent } from "@app/shared/modules/header/header.component";

@Component({
    selector: "app-promo",
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: "./promo.component.html",
    styleUrl: "./promo.component.scss",
})
export class PromoComponent {}
