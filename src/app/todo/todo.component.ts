import { Component } from '@angular/core';
import { TODOLIST } from '../sample-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todolist = TODOLIST;

  markComplete(el) {
    el.completed = true;
  }
}

