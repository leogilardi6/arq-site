import { Component, inject } from '@angular/core';
import { footer_items } from '../../../assets/resources/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  items = footer_items;

  navigate(item) {
    let newRoute = item.route;
    if (item.item === 'whatsapp') {
      const message = item.message
        .split(' ')
        .filter((val) => val !== '')
        .join(' ');
      newRoute += encodeURI(message);
    }
    window.open(newRoute, '_blank');
  }
}
