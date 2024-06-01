import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-1',
  standalone: true,
  templateUrl: './one-1.component.html',
})
export class One1Component {
 @Input() public titel=''

}
