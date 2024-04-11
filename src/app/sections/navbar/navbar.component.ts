import { Component, Input } from '@angular/core';
import { nav_items } from '../../../assets/resources/navigation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() currentRoute = undefined;

  nav_items = nav_items;
}
