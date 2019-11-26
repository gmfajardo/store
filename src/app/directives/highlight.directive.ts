import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() bgcolor: string = 'red';
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = this.bgcolor;
    console.log('Color' + this.bgcolor);
  }

}
