import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: string): Todo[] {
    let displayedObj: Todo[] = [];
    if(filter) {
      for(let obj of value) { // Come back and rename this?
        if(obj.task.toLowerCase().includes(filter.toLowerCase())) {
          displayedObj.push(obj);
        }
      }
    } else {
      displayedObj = value;
    }
    return displayedObj;
  }
}
