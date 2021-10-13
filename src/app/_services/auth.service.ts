import { Injectable } from '@angular/core';
import { Observable , of  } from 'rxjs';
import { tap , delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;

  constructor() { }


  AdminLogin(username? : string,password? : string) : Observable<any>{
    this.isUserLoggedIn = username == "admin" && password == "admin123";
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? "true" : "false");
    localStorage.setItem('role','Admin');
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
  }

  BloodBankLogin(username? : string,password? : string) : Observable<any>{
    this.isUserLoggedIn = username == "blood" && password == "blood";
    localStorage.setItem('role','BloodBank');
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
  }

  UserLogin(username? : string,password? : string) : Observable<any>{
    this.isUserLoggedIn = username == "user" && password == "user";
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? "true" : "false");
    localStorage.setItem('role','User');
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
  }

  logout(){
    this.isUserLoggedIn = false; 
    localStorage.removeItem('isUserLoggedIn'); 
    localStorage.removeItem('role');
  }

  IsLoggedIn(){
    return localStorage.getItem('isUserLoggedIn') == "true";
  }

  GetRole(){
    return localStorage.getItem('role'); 
  }
  
}
