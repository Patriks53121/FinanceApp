import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Contacts } from './pages/contacts/contacts';
import { About } from './pages/about/about';
import { Download } from './pages/download/download';
import { Instructions } from './pages/instructions/instructions';
export const routes: Routes = [
  { path: '', component: Main, title: 'Home' },
  { path: 'contacts', component:  Contacts, title: 'Contacts' },
  { path: 'contacts/feedback', redirectTo: "contacts", pathMatch: "full", title: 'Feedback' },
  { path: 'about', component:  About, title: 'About' },
  { path: 'download', component: Download, title: 'Download' },
  { path: 'download/apk', component: Download, title: 'Download APK' },
  { path: 'download/source', redirectTo: 'https://github.com/Patriks53121/FinanceApp', title: 'Download source' },
  { path: 'instructions', component: Instructions, title: 'Instructions' },
];
