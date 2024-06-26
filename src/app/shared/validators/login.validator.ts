import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

export const forbiddenEmailValidator = (control: AbstractControl): ValidationErrors | null => {
    const emails = ['vova@mail.ru'];
    return emails.includes(control.value) ? { forbiddenEmail: 'Email is not allowed' } : null;
}

export const advanceForbiddenEmailValidator = (emails: Array<string>): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        return emails.includes(control.value) ? { forbiddenEmail: 'Email is not allowed' } : null;
    }
}

export const asyncEmailValidator =  (control: AbstractControl): Observable<ValidationErrors | null> => {
    const emails = ['oleg@mail.ru'];
    return of(control.value).pipe(
        delay(1000),
        map(() => {
            return emails.includes(control.value) ? { forbiddenEmail: 'Email is not allowed' } : null;
        })
    )
}