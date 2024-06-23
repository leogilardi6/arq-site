import { Component, Input } from '@angular/core';
import { nav_items } from '../../../assets/resources/navigation';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private router = inject(Router);
  @Input() currentRoute = undefined;

  nav_items = nav_items;

  isExpanded = false;

  navigate(route: string) {
    let newRoute = route;
    if (route === '/' && window.innerWidth < 1024) {
      newRoute = '/projects';
    }
    this.isExpanded = false;
    this.router.navigateByUrl(newRoute);
  }
}
