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
  show_background = signal('');
  projects = projects_resource;
  router = inject(Router);

  onImgMouseover(id: string) {
    this.show_background.set(id);
  }

  onImgMouseout(id: string) {
    this.show_background.set('');
  }

  navigateTo(project_id: string) {
    this.router.navigateByUrl(`/projects/${project_id}`);
  }
}
