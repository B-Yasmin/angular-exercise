import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
   constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
