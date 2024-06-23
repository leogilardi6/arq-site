import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { gallery } from '../../../assets/resources/gallery';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() id = '';

  project_content: any;

  ngOnInit() {
    this.project_content = gallery.find(
      (val) => val.project_id.toString() === this.id
    )?.resources;
    console.log('Input', this.project_content);
  }
}
