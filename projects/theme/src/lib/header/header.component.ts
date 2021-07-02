import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input()
  menus:any =[];

  user:any;
  isLoggedIn:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    if(userStr){
      this.user = JSON.parse(userStr);
      this.isLoggedIn = this.user != null;
    }
    //this.loadMenus();
  }



  getLeftMenus(){
    return this.menus.filter((obj:any)=> !obj.position || obj.position=='left');
  }

  getRightMenus(){
    return this.menus.filter((obj:any)=> obj.position && obj.position=='right');
  }


  logout(){
    localStorage.clear();

    this.router.navigateByUrl('login');
  }


}
