import { NgClass } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { asyncEmailValidator } from "@app/shared/validators/login.validator";

@Component({
    selector: "app-modal",
    standalone: true,
    imports: [NgClass, ReactiveFormsModule],
    templateUrl: "./modal.component.html",
    styleUrl: "./modal.component.scss",
})
export class ModalComponent {
    public clientForm!: FormGroup;
    public submitted = false;
    public successSubmit = false;

    @Output("onClose")
    public closeModal = new EventEmitter();

    ngOnInit(): void {
        this.initializeForm();
    }

    private initializeForm(): void {
        this.clientForm = new UntypedFormGroup({
            name: new UntypedFormControl(
                { value: null, disabled: false },
                {
                    validators: [Validators.required],
                }
            ),
            email: new UntypedFormControl(null, {
                validators: [Validators.email, Validators.required],
                asyncValidators: [asyncEmailValidator],
            }),
        });
    }

    public onClickCloseBtn(): void {
        this.closeModal.emit();
    }

    public submit() {
        this.clientForm.markAllAsTouched();
        if (this.clientForm?.valid) {
            this.submitted = true;
            this.clientForm.disable();
            setTimeout(() => {
                this.successSubmit = true;
                this.submitted = false;
            }, 1700);
        }
    }
}
