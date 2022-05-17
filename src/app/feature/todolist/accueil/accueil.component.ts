import { TodolistService } from './../service/todolist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  noteForm = new FormBuilder().group({ nom: new FormControl(''), contenu: new FormControl(''), id: new FormControl('') });
  todos: Todo[];
  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
    this.todos = this.todolistService.getAllTodo();
  }


  saveNote() {
    const titre = this.noteForm.get('nom').value;
    const contenu = this.noteForm.get('contenu').value;
    const id = this.noteForm.get('id').value;
    const note: Todo = { titre, contenu, id: id };
    this.todolistService.saveTodo(note);
    this.todos = this.todolistService.getAllTodo();
  }

  reset() {
    this.noteForm.reset();
  }

  editer(id: string) {
    const todo = this.todolistService.getTodo(id);
    this.noteForm.get('nom').patchValue(todo.titre);
    this.noteForm.get('contenu').patchValue(todo.contenu);
    this.noteForm.get('id').patchValue(todo.id);
    this.todos = this.todolistService.getAllTodo();
  }

  supprimer(id: string) {
    this.todolistService.removeTodo(id);
    this.todos = this.todolistService.getAllTodo();
  }

}
