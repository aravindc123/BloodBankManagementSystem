import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators  } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active = 1;
  loginForm! : FormGroup; 
  submitted = false;
  error = "";


  constructor(private formBuilder : FormBuilder,private authService : AuthService,private router : Router) {
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

  onSubmit(data : any){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.active == 1){
        this.authService.AdminLogin(data.username,data.password).subscribe(
          data => {
            this.router.navigate(['/admin']);
          },
          err => {
            this.error = err;
          }
        );
      }
      else if(this.active == 3){
        this.authService.BloodBankLogin(data.username,data.password).subscribe(
          data => {
            this.router.navigate(['/BloodBank']);
          },
          err => {
            this.error = err;
          }
        );
      }
      else if(this.active == 2){
        this.authService.UserLogin(data.username,data.password).subscribe(
          data => {
            this.router.navigate(['/']);
          },
          err => {
            this.error = err;
          }
        );
      }
      }
    }
  }
