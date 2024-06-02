import { Component } from '@angular/core';
import { Two1Component } from './two-1/two-1.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [Two1Component, NavbarComponent],
  templateUrl: './two.component.html'
})
export class TwoComponent {
  
}
