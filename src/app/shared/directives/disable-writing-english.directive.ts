import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appDisableWritingEnglish]'
})
export class DisableWritingEnglishDirective {
  @HostBinding('autocomplete') public autocomplete;

  constructor() {
    this.autocomplete = 'off';
   }

   @HostListener('keypress', ['$event']) public disableKeys(e : any) {
    const stringAllow = /^[-\s,\u0600-\u06FF,0-9]+$/;
    let inputChar = e.key;
    if (!stringAllow.test(inputChar)) {
      e.preventDefault();
    }
 
  }
}
