import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MobileDetectService } from "@app/shared/services/mobile-detect.service";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet],
    providers: [MobileDetectService],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "dazzlink-promo";
}
