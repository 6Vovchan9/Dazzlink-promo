import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-modal",
    standalone: true,
    imports: [],
    templateUrl: "./modal.component.html",
    styleUrl: "./modal.component.scss",
})
export class ModalComponent {
    @Output("onClose")
    public closeModal = new EventEmitter();

    public onClickCloseBtn(): void {
        this.closeModal.emit();
    }
}
