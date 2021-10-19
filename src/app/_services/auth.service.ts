import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of  } from 'rxjs';
import { tap , delay, map, catchError } from 'rxjs/operators';
import { BloodBankReg } from '../_models/blood-bank';
import { Donor, DonorLoginCredential, DonorReg } from '../_models/donor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;
  url = "https://localhost:44309/api/Auth"

  constructor(private http : HttpClient) { }

  BloodBankLogin(bloodBank : DonorLoginCredential){
    return this.http.post(this.url+"/LoginBloodBank",bloodBank)
    .pipe(map(blood => {
      if(blood != false){
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('User',JSON.stringify(blood));
        localStorage.setItem('role','BloodBank');
      }
      else{
        localStorage.setItem('isUserLoggedIn','false');
      }
    }));
  }

  AdminLogin(admin : DonorLoginCredential):Observable<any>{
    return this.http.post(this.url +"/LoginAdmin",admin);
   
  };

  DonorLogin(donorLogin : DonorLoginCredential) {
    return this.http.post(this.url+"/login",donorLogin)
    .pipe(map(user => {
      if(user != false){
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('User',JSON.stringify(user));
        localStorage.setItem('role','User');
        console.log(user);
      }
      else {
        localStorage.setItem('isUserLoggedIn',"false");
      }
    }));
  }

  RegisterBloodBank(bloodBank : BloodBankReg) : Observable<any>{
    return this.http.post(this.url+"/RegisterBloodBank",bloodBank);
  }

  RegisterDonor(donor : DonorReg) : Observable<any>{
    return this.http.post(this.url+"/RegisterDonor",donor);
  }

  logout(){
    this.isUserLoggedIn = false; 
    localStorage.clear();
  }

  GetUser() : Observable<any>{
    let data = JSON.parse(localStorage.getItem('User')!);
    return of(data.UserName).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + data); 
      })
   );
  }

  GetUserName(){
    if(localStorage.getItem('isUserLoggedIn') == "true"){
      if(localStorage.getItem('role') == "User"){
        return JSON.parse(localStorage.getItem('User')!).UserName;
      }
      else if(localStorage.getItem('role') == "BloodBank"){
        return JSON.parse(localStorage.getItem('User')!).BloodBankName;
      }
      else{
        return "Admin";
      }
    }
    
  }

  IsLoggedIn(){
    return localStorage.getItem('isUserLoggedIn') == "true";
  }

  GetRole(){
    return localStorage.getItem('role'); 
  }
  
}
