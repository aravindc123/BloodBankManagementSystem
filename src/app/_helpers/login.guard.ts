import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('isUserLoggedIn') == "true"){
      switch(localStorage.getItem('role')){
        case "Admin" : this.router.navigate(['/admin']);
        break; 
        case "BloodBank" : this.router.navigate(['/BloodBank']); 
        break; 
        case "User" : this.router.navigate(['/']); 
        break; 
        default : this.router.navigate(['/']);
      }
      return false;
    }
    else{
      return true;
    }
  }
  
}
