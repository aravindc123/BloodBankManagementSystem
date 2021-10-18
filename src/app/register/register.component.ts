import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBankReg } from '../_models/blood-bank';
import { DonorReg } from '../_models/donor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  active = 1;
  submitted = false;
  bloodBankRegisterForm! : FormGroup;
  donorRegisterForm! : FormGroup;

  constructor(private authservice : AuthService,private router : Router,private formBuilder : FormBuilder) { 
    this.bloodBankRegisterForm = this.formBuilder.group({
      BloodBankName : ['',Validators.required],
      Password : ['',Validators.required],
      ConfirmPassword : ['',Validators.required],
      ContactNumber : ['',Validators.required],
      City : ['',Validators.required]
    });

    this.donorRegisterForm = this.formBuilder.group({
        UserName : ['',Validators.required],
        DPassword : ['',Validators.required],
        DCPassword : ['',Validators.required],
        DContact : ['',Validators.required],
        AadharNumber : ['',Validators.required],
        BloodGroup : ['',Validators.required],
        DateofBirth : ['',Validators.required],
        DCity : ['',Validators.required],
        DHealthCondition : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get form(){
    return this.bloodBankRegisterForm.controls; 
  }

  changeAuthDonor(){
    this.active = 1; 
  }

  changeAuthBloodBank(){
    this.active = 2;
  }

  onSubmit(event : any){
    console.log(event.BloodBankName);
    this.submitted = true;
    if(this.active == 1){
      if(this.donorRegisterForm.invalid){
        let donorReg : DonorReg = {
          UserName : event.UserName, 
          Password : event.DPassword,
          Contact : event.DContact,
          AadharNumber : event.AadharNumber,
          BloodGroup : event.BloodGroup,
          DOB : event.DateofBirth,
          City : event.DCity,
          HealthCondition : event.DHealthCondition,
          IsDonor : event.IsDonor
        }
        console.log(donorReg)
        alert("Invalid")
        return;
      }
      else{
        console.log("Hi")
        let donorReg : DonorReg = {
          UserName : event.UserName, 
          Password : event.DPassword,
          Contact : event.DContact,
          AadharNumber : event.AadharNumber,
          BloodGroup : event.BloodGroup,
          DOB : event.DOB,
          City : event.DCity,
          HealthCondition : event.DHealthCondition,
          IsDonor : event.IsDonor
        }
        this.authservice.RegisterDonor(donorReg).subscribe(data => {
          if(data){
            this.router.navigate(['/Login'])
          }
          else{
            alert("Failed");
          }
        });
      }
    }
    else{
      if(this.bloodBankRegisterForm.invalid){
          return;
      }
      else{
        let bloodBank : BloodBankReg = {
          BloodBankName : event.BloodBankName,
          Password : event.Password,
          City : event.City,
          Contact : event.Contact
        }
        this.authservice.RegisterBloodBank(bloodBank).subscribe(data => {
            if(data){
              this.router.navigate(['/Login']);
            }
            else{
              alert("Failed Registration");
            }
        });
      }
    }
  }

  get DonorForm(){
    return this.donorRegisterForm.controls;
  }

 
}
