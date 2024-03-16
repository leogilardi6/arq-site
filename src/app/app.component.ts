import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { nav_items } from '../assets/resources/navigation';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NgStyle } from '@angular/common';
import { backgrounds } from '../assets/images/backgrounds/backgrounds';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgStyle],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Leonel Roht Arquitectura';
  nav_items = nav_items;
  currentRoute: any;
  currentImageIndex: number = 0;
  currentImage: string = backgrounds[this.currentImageIndex];
  private router = inject(Router);
  backgroundInt: any;

  ngOnInit() {
    initFlowbite();
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currentRoute = data.state.root.firstChild?.data['title'];
      }
    });
    this.backgroundInt = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % backgrounds.length;
      this.currentImage = backgrounds[this.currentImageIndex];
      console.log('IMagen', this.currentImage);
    }, 10000);
  }

  ngOnChanges() {}

  ngOnDestroy(): void {
    if (this.backgroundInt) {
      clearInterval(this.backgroundInt);
    }
  }
}
