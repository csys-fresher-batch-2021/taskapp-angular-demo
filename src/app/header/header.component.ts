import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any;
  isLoggedIn:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    if(userStr){
      this.user = JSON.parse(userStr);
      this.isLoggedIn = this.user != null;
    }
  }

  logout(){
    localStorage.clear();

    this.router.navigateByUrl('login');
  }



}
