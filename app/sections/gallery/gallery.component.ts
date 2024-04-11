import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { gallery } from '../../../assets/resources/gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgStyle],
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
