import { AccueilComponent } from './accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccueilComponent },
];

export const TodolistRoutingRoutes = RouterModule.forChild(routes);
