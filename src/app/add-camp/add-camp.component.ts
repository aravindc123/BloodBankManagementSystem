import { Component, OnInit } from '@angular/core';
import { CampRegister, Camps, DonationCamp, EventRegister } from '../_models/camps';
import { BloodBankService } from '../_services/blood-bank.service';
import { FormGroup , FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {

  camps? : Camps[];
  eventId? : number;
  bloodBankId! : number;
  addCampForm! : FormGroup;
  submitted = false;
  registeredDonors? : EventRegister[];

  constructor(private bloodBankService : BloodBankService,private formBuilder : FormBuilder) {
    let data = JSON.parse(localStorage.getItem('User')!); 
    this.bloodBankId = data.BloodBankId;
    this.addCampForm = this.formBuilder.group({
      EventName : ['',Validators.required],
      EventDate : ['',Validators.required],
      EventTime : ['',Validators.required],
      EventClosing : ['',Validators.required],
      EventPlace : ['',Validators.required]
    });
   }

   get form(){
     return this.addCampForm.controls;
   }
  ngOnInit(): void {
    this.GetAllCamps();
  }

  GetAllCamps(){
    this.bloodBankService.GetAllCamps(this.bloodBankId).subscribe(data => {
      this.camps = data;
    })
  }

  GetDate(date: any): any {
    const _date = new Date(date);
    return new Date(
      Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate())
    );
  };

  onSubmit(event : any){
    if(this.addCampForm.invalid){
      return;
    }
    else{
      let campDetails : DonationCamp = {
        BloodBankId : this.bloodBankId,
        EventId: 1,
        EventName : event.EventName,
        EventDate : event.EventDate,
        EventTime : event.EventTime,
        EventClosing : event.EventClosing,
        City : event.EventPlace
      }
      console.log(campDetails);
      this.bloodBankService.AddCamps(campDetails).subscribe(
        data => {
          if(data){
            this.GetAllCamps();
            this.submitted = false;
            this.addCampForm.reset();
            alert("Camp added");
          }
          else{
            alert("Failed");
          }
        }
      )
    }
  }

  GetAllRegisteredDonors(eventId : any){
    this.bloodBankService.GetAllRegisteredDonors(eventId).subscribe((data) => {
      console.log(data);
      this.registeredDonors = data;
      this.eventId = eventId;
    })
  }

  MarkDonated(regId : any,UserId : any){
    let camp : CampRegister = {
      EventId : this.eventId,
      UserId : UserId,
      RegId : regId,
      IsDonated : 1
    };
    this.bloodBankService.MarkDonated(camp).subscribe((data : any) => {
      if(data){
        this.GetAllRegisteredDonors(this.eventId);
      }
    })
  }


}
