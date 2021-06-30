import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users:any = [{name:"Naresh", email:"nareshkumarh@live.com", password:"pass123"}];

  getAllUsers(){
    let url ="https://mytradesapi.herokuapp.com/allusers";
    return this.http.get(url);
  }


}
