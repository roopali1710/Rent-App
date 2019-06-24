import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id:string
  isAccountCreated:boolean=false
  constructor(public route:ActivatedRoute, public auth:AuthService) {   }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
  }

  signup(signupForm:NgForm)
  {
    console.log(signupForm.value)
    this.auth.signUp(signupForm.value.email,signupForm.value.password)
    signupForm.reset()
  }

  signUpError()
  {
    return this.auth.iserr2;
  }

  errorMessage2()
  {
    return this.auth.errorMessage2;
  }
}
