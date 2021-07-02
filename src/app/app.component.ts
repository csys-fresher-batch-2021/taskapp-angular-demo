import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'taskapp-angular';

  menus:any;

  ngOnInit(): void {
    this.loadMenus();
  }



  loadMenus(){
    this.menus = [
      {path:'/home', title:'Home' },
      {path:'/tasks', title:'Tasks' },
      {path:'/task-report', title:'Reports' },
      {path:'/login', title:'Login' , position:'right'},
      {path:'/login', title:'Register', position:'right' },

    ];
  }

}
