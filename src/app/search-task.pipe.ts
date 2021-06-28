import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

  transform(tasks: any[], inputTaskName: string): any {
    console.log("Input:" , inputTaskName);
    console.log("tasks",tasks);

    if(!tasks) return [];
    if(!inputTaskName) return tasks;
    console.log('Task Pipe:' , inputTaskName);
    return tasks.filter( taskObj => {
      return taskObj.name.includes(inputTaskName)
    });



    return tasks;
  }

}
