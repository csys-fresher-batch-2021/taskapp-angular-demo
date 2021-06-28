import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { SearchTaskPipe } from '../search-task.pipe';
import { TaskReportComponent } from '../task-report/task-report.component';
import { ViewTaskComponent } from '../view-task/view-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddTaskComponent,
    ListTasksComponent,
    ViewTaskComponent,
    SearchTaskPipe,
    TaskReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class TasksModule { }
