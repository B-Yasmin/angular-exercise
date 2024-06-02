import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mall',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './mall.component.html'
})
export class MallComponent {
  
}
