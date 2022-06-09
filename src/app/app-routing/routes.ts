import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PatientsComponent } from '../patients/patients.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'patient', component: PatientsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];