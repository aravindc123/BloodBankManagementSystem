import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeAuthDonor(){
    this.active = 1; 
  }

  changeAuthBloodBank(){
    this.active = 2;
  }
}
