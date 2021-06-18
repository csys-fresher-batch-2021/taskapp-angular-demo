import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  //Dependency Injection(DI)
  constructor( private taskService: TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  taskName:string="";

  addTask(form:NgForm){

    if ( form.valid){

      // let name =  document.querySelector("#name").value;

      let taskObj =  {name: this.taskName, status:'PENDING'};
      this.taskService.addTask(taskObj).then (res=>{
        console.log(res);
        alert("Successfully added task" + this.taskName);
        //window.location.href="listtask.html";
        this.router.navigateByUrl('tasks');//absolute
        //this.router.navigate(['tasks']);//relative

      },err=>{
        console.log(err);
        alert("Unable to add tasks");
      });

    }
    else{
      alert("Invalid Details");
    }
  }

}
