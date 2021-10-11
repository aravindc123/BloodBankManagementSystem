import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active = 1;
  loginForm! : FormGroup; 
  submitted = false;


  constructor(private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username : ['',Validators.required], 
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  get form(){
    return this.loginForm.controls; 
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

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
  }
}
