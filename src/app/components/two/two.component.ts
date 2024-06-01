import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Two1Component } from './two-1/two-1.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [Two1Component],
  templateUrl: './two.component.html'
})
export class TwoComponent {
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
