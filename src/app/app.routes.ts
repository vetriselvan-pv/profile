import { Routes } from '@angular/router';
import { MainContent } from './main-content';
import { BlogsPage } from './blog/blogs-page';

export const routes: Routes = [
  { path: '', component: MainContent },
  { path: 'blogs', component: BlogsPage },
  { path: '**', redirectTo: '' }
];
