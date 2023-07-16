import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  showPass:boolean = false;
  check = false;

  constructor(private router:Router) { 
    this.loginForm = new FormGroup({
      email:new FormControl('',
      [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_]+@[a-zA-Z0-9.]+[.]+[a-zA-Z]*$/),
      Validators.maxLength(50)]),

      password:new FormControl('',
      [Validators.required,
      Validators.minLength(6)]
      )
    })
  }

  get resetControls() {
    console.log('login',this.loginForm.controls)
    if(this.loginForm.controls['valid']){
      console.log('true');
    } else {
      console.log('false');
    }
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  showPassword() {
   if(this.showPass){
    this.showPass = false;
   } else {
    this.showPass = true;
   }
  }

  submit() {
    this.router.navigate(["./dashboard"])
  }

}
