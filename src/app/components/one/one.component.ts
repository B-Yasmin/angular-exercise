import { Component} from '@angular/core';
import { One1Component } from './one-1/one-1.component';

@Component({
  selector: 'app-one',
  standalone: true,
  templateUrl: './one.component.html',
  imports: [One1Component]
})
export class OneComponent {
  
}
