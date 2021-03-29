import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightHighestVotes]',
})
export class HighlightHighestVotesDirective {
  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color = 'Seagreen';
  }
}
