import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/service/rental.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { database } from 'firebase';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  path=''
  isUploaded:boolean=false
  isPropertyAdded:boolean=false
  constructor(public rentalService:RentalService,public authService:AuthService,private storage:AngularFireStorage, public router:Router) { }

  ngOnInit() {
  }
  addProperty(addrentalform:NgForm){
    let ownerEmail=this.authService.getEmail()
    let image=this.path
    console.log(addrentalform.value)
    this.rentalService.addRental(addrentalform.value).then(data=>{
      console.log(data.id)
      addrentalform.reset()
      this.isPropertyAdded=true
    }).catch(err=>{
      console.log(err)
    })  
    

  }
  selectFile(event){
    let file=event.target.files[0]
    console.log(event.target.files[0])
    let date=new Date()
    let unique='/rentals/'+date
    this.path=unique
    let task=this.storage.upload(unique,file).then(data=>{
      console.log(data)
      this.isUploaded=true
    }).catch(err=>{
      console.log(err)
    })  
    
   
  }
}
