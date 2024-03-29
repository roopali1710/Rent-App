import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { AddrentalComponent } from './home/addrental/addrental.component';
import { IndexComponent } from './home/index/index.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './service/authguard.service';
import { EnquiryService } from './service/enquiry.service';
import { EnquiriesComponent } from './home/enquiries/enquiries.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthguardService]},
  {path:'allproperties' , component:RentalsComponent},
  {path:'home' , component:HomeComponent, canActivate:[AuthguardService], children:
[{path:'',component:IndexComponent}]},
  {path:'addproperties',component:AddrentalComponent,canActivate:[AuthguardService]},
  {path:'auth',component:AuthComponent},
  {path:'enquiries',component:EnquiriesComponent,canActivate:[AuthguardService]},
  {path:'auth/signin',component:SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'test/:id',component:SignupComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
