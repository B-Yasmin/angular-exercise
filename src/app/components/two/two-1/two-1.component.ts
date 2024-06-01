import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-1',
  standalone: true,
  imports: [],
  templateUrl: './two-1.component.html'
})
export class Two1Component {
  @Input() public titel = ''

}
