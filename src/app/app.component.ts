import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { nav_items } from '../assets/resources/navigation';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./sections/navbar/navbar.component";
import { FooterComponent } from "./sections/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Leonel Roht Arquitectura';
  nav_items = nav_items;
  currentRoute: any;
  private router = inject(Router);


  ngOnInit() {
    initFlowbite();
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currentRoute = data.state.root.firstChild?.data["title"];
      }
    });
  }

  ngOnChanges() {
  }
}
