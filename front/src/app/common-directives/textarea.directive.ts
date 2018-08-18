import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[app-textarea]'
})
export class TextareaDirective {

  constructor(el: ElementRef) {
    console.log(el);
  }

  @HostListener('click', ['$event.target']) onMouseEnter(textarea) {
    console.log('clicked');
  }

}
