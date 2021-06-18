import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string | undefined;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.userService.getAllUsers().subscribe(res=>{
      console.log(res);
      let users:any = res;
      if (users.includes(this.email)){
        alert("Successfully LoggedIn");
        let user  =  { name: this.email , email: this.email};
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
        //this.router.navigateByUrl('tasks');
        window.location.href="tasks";
      }
      else{
        alert("Invalid Login Credentials");
      }
    },err=>{
        console.log(err);
        alert("Invalid Login Credentials");
    })

  }

}
