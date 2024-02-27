import { Component, inject, signal } from '@angular/core';
import { projects_resource } from '../../../assets/resources/projects_r';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  show_background = signal(0);
  projects = projects_resource;
  router = inject(Router);

  onImgMouseover(id: number) {
    this.show_background.set(id);
  }

  onImgMouseout(id: number) {
    this.show_background.set(0);
  }

  navigateTo(project_id: number) {
    this.router.navigateByUrl(`/projects/${project_id}`);
  }
}
