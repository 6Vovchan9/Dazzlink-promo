import { NgTemplateOutlet } from "@angular/common";
import { Component, Optional } from "@angular/core";
import { FooterComponent } from "@app/shared/modules/footer/footer.component";

import { HeaderComponent } from "@app/shared/modules/header/header.component";
import { MobileDetectService } from "@app/shared/services/mobile-detect.service";

@Component({
    selector: "app-promo",
    standalone: true,
    imports: [HeaderComponent, FooterComponent, NgTemplateOutlet],
    templateUrl: "./promo.component.html",
    styleUrl: "./promo.component.scss",
})
export class PromoComponent {
    constructor(@Optional() public mobileDetectService: MobileDetectService) {}
}
