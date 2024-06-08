import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {
    public get curYear(): number {
        return new Date().getFullYear();
    }
}
