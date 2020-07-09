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

  completeTask(todo) {
    todo.completed = true;
  }

  addTask(addTodoInputForm: NgForm) {
    this.todoArray.push(
      {
        task: addTodoInputForm.value.todoInput,
        completed: false
      }
    );
  }

  removeTask(index){
    this.todoArray.splice(index, 1);
  }
}
