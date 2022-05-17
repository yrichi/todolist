import { AccueilComponent } from './feature/todolist/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'todolist', loadChildren: () => import('./feature/todolist/todolist.module').then((v) => v.TodolistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
