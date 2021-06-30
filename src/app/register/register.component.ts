import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,  Validators.minLength(8)])
    })
  }

  get f() { return this.registerForm.controls; }

  register(){

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
      alert("Registered Successfully");
    }
  }

}
