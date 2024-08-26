import { Component } from '@angular/core';
import { Three1Component } from './three-1/three-1.component';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [Three1Component],
  templateUrl: './three.component.html'
})
export class ThreeComponent {

}
