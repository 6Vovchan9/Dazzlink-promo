import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { AbsractExample } from "@app/shared/helpers/abstract.class";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [RouterLink, NgIf, RouterLinkActive],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent extends AbsractExample {
    public showNavModal = false;

    public requiredMethod(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public openNavPopup(): void {
        this.showNavModal = true;
        this.hideScroll();
    }

    public closeNavPopup(): void {
        this.showNavModal = false;
        this.showScroll();
    }
}
