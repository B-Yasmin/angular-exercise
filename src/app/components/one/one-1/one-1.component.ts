import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-1',
  standalone: true,
  templateUrl: './one-1.component.html',
})
export class One1Component {
 @Input() public titel=''

}



//För att visa titeln i en komponent som hämtas från en annan komponent, följer vi dessa steg:
// 1- @Input() public titel='' i one-1.component.ts filen
// 2- <p>{{titel}}</p> i one-1.component.html filen
// 3- Dynamik property binding[titel]="'Här använder vi en titel med hjälp av @Input()'" i one.component.html filen


