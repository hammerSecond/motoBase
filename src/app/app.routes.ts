import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Moto2Component } from './moto2/moto2.component';
import { Moto3Component } from './moto3/moto3.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'moto2',
    component: Moto2Component,
    title: 'moto2 Standings'
  },
  {
    path: 'moto3',
    component: Moto3Component,
    title: 'moto3 Standings'
  }
];
