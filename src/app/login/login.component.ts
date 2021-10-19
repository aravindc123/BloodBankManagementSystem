import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators  } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { DonorLoginCredential } from '../_models/donor';

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
        let adminData : DonorLoginCredential = {
          UserName : data.username, 
          Password : data.password
        }
        
        this.authService.AdminLogin(adminData).subscribe(
          data => {
            if(data == true){
              localStorage.setItem('isUserLoggedIn',"true");
              localStorage.setItem('role','Admin');
              this.router.navigate(['/admin']);
            }
            else{
              alert("Username or Password is wrong");
            }
          },
          err => {
            this.error = err;
          }
        );
      }
      else if(this.active == 3){
        let blood : DonorLoginCredential = {
          UserName : data.username,
          Password : data.password
        };
        this.authService.BloodBankLogin(blood).subscribe(
          data => {
            if(this.authService.IsLoggedIn() == true){
              console.log("Hello")
              this.router.navigate(['/BloodBank']);
            }
            else{
              console.log("HelloWorld");
              alert("Username or Password is incorrect..!");
            }
          },
          err => {
            this.error = err;
          }
        );
      }
      else if(this.active == 2){
        let donor : DonorLoginCredential = {
          UserName : data.username,
          Password : data.password
        }
        this.authService.DonorLogin(donor).subscribe(
          data => {
           if(this.authService.IsLoggedIn()){
             this.router.navigate(['/'])
           }
           else{
            alert("Username or Password is incorrect..!");
           }
          },
          err => {
            this.error = err;
          }
        );
      }
      }
    }
  }
