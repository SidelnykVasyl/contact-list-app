import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberLengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    const trimmedPhoneNumber = phoneNumber ? phoneNumber.replace(/[\s-]/g, '') : '';
    const maxDigit = 10;
    const hasValidLength = trimmedPhoneNumber ? /^\d+$/.test(trimmedPhoneNumber) && trimmedPhoneNumber.length === maxDigit : true;
    return hasValidLength ? null : { 'invalidLength': { value: phoneNumber } };
  };
}
