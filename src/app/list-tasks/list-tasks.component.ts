import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks:any;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
    this.loadMenus();
  }

  menus:any;

  loadMenus(){
    this.menus = [ {path:'add', title:'Add Task'}, {path:'add', title:'Delete Task'}]
  }
  loadTasks(){
    this.taskService.getAllTasks().then(res=>{
      console.log(res);
      this.tasks = res;
      this.searchResults = this.tasks;
    });
  }

  taskName:string = "";
  searchResults:any=[];

  search(){
    alert(this.taskName);
    this.searchResults = this.tasks.filter((obj:any)=> obj.name.includes(this.taskName));
  }

  getTaskColor(status:string){

    let color ='';
    if(status=='COMPLETED'){
      color = 'badge bg-success';
    }
    else{

      color = 'badge bg-secondary';
    }
    return color;

  }


}
