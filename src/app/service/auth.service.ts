import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails=null
  isLoggedIn: boolean=false;
  isAccountCreated: boolean=false;
  iserr:boolean=false
  iserr2:boolean=false
  errorMessage:string
  errorMessage2:string
  constructor(public FirebaseAuth:AngularFireAuth, public router:Router) { 
    this.FirebaseAuth.authState.subscribe(user=>{
      if(user){
        this.userDetails=user
      }
    })
  }

    logIn(email,password){
      this.FirebaseAuth.auth.signInWithEmailAndPassword(email,password).then(data=>{
        this.userDetails=data
        console.log(this.userDetails)
        this.router.navigateByUrl('/home')
        this.isLoggedIn=true
      }).catch(err=>{
        this.iserr=true
        console.log(err)
        this.errorMessage=err
      })
      
    }

    signUp(email,password){
      this.FirebaseAuth.auth.createUserWithEmailAndPassword(email,password).then(data=>{
        console.log(data)
        this.isAccountCreated=true
        this.userDetails=data
        this.router.navigateByUrl('/home')
      
      }).catch(err=>{
        console.log(err)
        this.iserr2=true
        this.errorMessage2=err
      })
    }

    isAuthenticated(){
      if(this.userDetails){
        return true;
      }
      else{
        return false;
      }
    }
  
    getEmail(){
      console.log(this.userDetails)
     return this.userDetails.user.email
   }

}
