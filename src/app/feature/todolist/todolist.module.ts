import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { TodolistRoutingRoutes } from './todolist-routing.module';
import { TodolistService } from './service/todolist.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccueilComponent],
  providers: [TodolistService],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    TodolistRoutingRoutes,
  ]
})
export class TodolistModule { }
