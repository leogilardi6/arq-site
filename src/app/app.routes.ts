import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './sections/gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'home' } },
    {
        path: 'projects', children: [
            { path: '', component: ProjectsComponent, data: { title: 'projects' } },
            { path: ':id', component: GalleryComponent, data: { title: 'projects' } }
        ]
    },
    { path: 'contact', component: ContactComponent, data: { title: 'contact' } },
    { path: '**', redirectTo: '', data: { title: '' } },
];
