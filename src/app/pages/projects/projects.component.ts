import { Component, signal } from '@angular/core';
import { projects_resource } from '../../../assets/resources/projects_r';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  show_background = signal(0);
  projects = projects_resource;

  onImgMouseover(id: number) {
    this.show_background.set(id);
  }

  onImgMouseout(id: number) {
    this.show_background.set(0);
  }
}
