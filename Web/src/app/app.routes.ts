import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Contacts } from './pages/contacts/contacts';
import { About } from './pages/about/about';
import { Download } from './pages/download/download';
import { Instructions } from './pages/instructions/instructions';

export const routes: Routes = [
  { path: '', component: Main, title: 'Home' },
  { path: 'contacts', component:  Contacts, title: 'Contacts' },
  { path: 'about', component:  About, title: 'About' },
  { path: 'download', component: Download, title: 'Download' },
  { path: 'instructions', component: Instructions, title: 'Instructions' },
];
