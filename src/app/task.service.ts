import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:any = [
    {id:1, name:"Install NodeJS", status:"COMPLETED"},
    {id:2, name:"Install Express", status:"PENDING"},
    {id:3, name:"Install Postgres", status:"PENDING"},
  ];
  constructor() { }

  async addTask(task:any){
    let size = this.tasks.length;
    task.id = size +1;
    this.tasks.push(task);
  }

  async getAllTasks(){
    return this.tasks; //[]
  }

  async findById(taskId:number){
    return this.tasks.find( (obj:any)=>obj.id == taskId); // {}
  }

  async deleteTask(taskId:number){
    let index = this.tasks.findIndex( (obj:any)=>obj.id == taskId); // {}
    ///let task = this.tasks[index];
    this.tasks.splice(index, 1);

  }


  async updateTask(taskId:number, status:string){
    let index = this.tasks.findIndex( (obj:any)=>obj.id == taskId); // {}
    let task = this.tasks[index];
    task.status = status;
    this.tasks[index] = task;

  }



}
