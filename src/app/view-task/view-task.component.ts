import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  taskId:number;

  task:any;

  constructor(private route:ActivatedRoute, private taskService: TaskService, private router:Router) {
    this.taskId =  this.route.snapshot.params['taskId'];
   }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(){
    this.taskService.findById(this.taskId).then(res=>{
      this.task = res;
    });
  }

  deleteTask(id:number){

    this.taskService.deleteTask(id).then(res=>{
      console.log(res);
      alert("Successfully Deleted");
      this.router.navigateByUrl('tasks');

    });
  }

  updateTask(id:number, status:string){

    this.taskService.updateTask(id,status).then(res=>{
      console.log(res);
      alert("Successfully Updated");
      this.router.navigateByUrl('tasks');

    });
  }

}
