import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active = 1;
  role! : string; 
  isUserLoggedIn? : boolean; 
  constructor(private authService : AuthService, private router : Router) { 
    this.isUserLoggedIn = this.authService.IsLoggedIn();
    if(this.isUserLoggedIn){
      this.role = localStorage.getItem('role')!;
    }
  }

  get UserLoggedIn(){
    return this.authService.IsLoggedIn();
  }

  get getRole(){
    return this.authService.GetRole(); 
  }

  ngOnInit(): void {
   
  }

  logout(){
    this.authService.logout(); 
    this.router.navigate(['/'])
  }

}
