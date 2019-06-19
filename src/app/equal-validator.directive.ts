import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appPasswordEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EqualValidatorDirective,
        multi: true
    }]
})

export class EqualValidatorDirective implements Validator {
  @Input() appPasswordEqualValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
      const controlToCompare = control.parent.get(this.appPasswordEqualValidator);
      if (controlToCompare && controlToCompare.value !== control.value) {
          return { 'notEqual': true };
      }

      return null;
  }
}
