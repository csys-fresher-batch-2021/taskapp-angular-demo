import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-report',
  templateUrl: './task-report.component.html',
  styleUrls: ['./task-report.component.css']
})
export class TaskReportComponent implements OnInit {



  taskReport:any;
  tasks:any;
  sortedData:any;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  count(tasks:any){
    return tasks.length
  }

  loadTasks(){
    this.taskService.getAllTasks().then(res=>{
      console.log(res);
      this.tasks = res;
      let groupByData = _.groupBy(this.tasks,'status');
      this.taskReport = groupByData;

      this.sortedData = _.sortBy(this.tasks,'name');

    });
  }
}
