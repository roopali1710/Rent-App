import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoggedIn:boolean=false
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signin(signinForm:NgForm)
  {
    console.log(signinForm.value)
    this.auth.logIn(signinForm.value.email,signinForm.value.password)
    
    signinForm.reset()
  }
  signInError()
  {
    return this.auth.iserr;
  }

  errorMessage()
  {
    return this.auth.errorMessage;
  }
}
