import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active = 1;

  activeClass = "text-dark fw-bold linkText linkTextActive"
  inactiveClass = "text-dark fw-bold linkText"

  constructor() { }

  ngOnInit(): void {
  }

  changeAuthAdmin(){
    this.active = 1;
  }

  changeAuthDonor(){
    this.active = 2; 
  }

  changeAuthBloodBank(){
    this.active = 3;
  }


}
