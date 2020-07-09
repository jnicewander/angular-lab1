import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.interface';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  todoArray: Todo[] = [];

  markComplete(el) {
    el.completed = true;
  }

  addTask(addTodoInputForm: NgForm) {
    this.todoArray.push(
      {
        task: addTodoInputForm.value.todoInput,
        completed: false
      }
    )


    console.log(addTodoInputForm.value);
    console.log(this.todoArray);
  }
}

