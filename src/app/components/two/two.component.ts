import { Component } from '@angular/core';
import { Two1Component } from './two-1/two-1.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [Two1Component],
  templateUrl: './two.component.html'
})
export class TwoComponent {
  
}
