import { Component, OnInit } from '@angular/core';
import { TODOLIST } from '../sample-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist = TODOLIST;

  constructor() { }

  ngOnInit(): void {
  }

}
