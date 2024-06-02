import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-others',
  standalone: true,
  imports: [],
  templateUrl: './page-others.component.html'
})
export class PageOthersComponent {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
