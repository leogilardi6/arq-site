import { Component } from '@angular/core';
import { footer_items } from '../../../assets/resources/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  items = footer_items;
}
