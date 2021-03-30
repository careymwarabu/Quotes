import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightHighestVote]'
})
export class HighlightHighestVoteDirective {

constructor(elem: ElementRef) { 
  elem.nativeElement.style.color = 'Seagreen';
}

}
