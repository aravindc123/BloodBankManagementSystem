import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of  } from 'rxjs';
import { tap , delay, map, catchError } from 'rxjs/operators';
import { Donor, DonorLoginCredential } from '../_models/donor';

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
      if(blood != null){
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('User',JSON.stringify(blood));
        localStorage.setItem('role','BloodBank');
      }
    }));
  }

  AdminLogin(admin : DonorLoginCredential):Observable<any>{
    return this.http.post(this.url +"/LoginAdmin",admin);
   
  };

  DonorLogin(donorLogin : DonorLoginCredential) {
    return this.http.post(this.url+"/login",donorLogin)
    .pipe(map(user => {
      if(user != null){
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('User',JSON.stringify(user));
        localStorage.setItem('role','User');
        console.log(user);
      }
    }));
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
