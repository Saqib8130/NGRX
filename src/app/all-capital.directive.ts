import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllCapital]',
  standalone: true
})
export class AllCapitalDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event:Event){
    const input=event.target as HTMLInputElement;
    input.value=input.value.toUpperCase();
    this.el.nativeElement.value=input.value;
  }

}
