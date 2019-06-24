import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  changeRoute(path){
    console.log('in change route')
    this.router.navigateByUrl(path)
  }
  
}
