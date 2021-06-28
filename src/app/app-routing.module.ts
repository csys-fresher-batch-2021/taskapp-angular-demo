import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { LoginComponent } from './login/login.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'tasks/:taskId', component: ViewTaskComponent},
  {path:'tasks', component: ListTasksComponent, canActivate:[]},
  {path:'task-report', component: TaskReportComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'addtask', component:AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
