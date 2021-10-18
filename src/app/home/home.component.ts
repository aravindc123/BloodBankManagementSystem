import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampRegister, Camps } from '../_models/camps';
import { Notifications } from '../_models/notifications';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificationData? : Notifications[];
  donationCamps? : Camps[];
  UserId? : number;
  eventId! : number;

  constructor(private userService : UserService,private router : Router) { 
    if(localStorage.getItem('isUserLoggedIn') == "true" && localStorage.getItem('role') == "User"){
      let data = JSON.parse(localStorage.getItem('User')!);
     
      this.UserId = data.UserId;
      console.log(this.UserId);
    }
  }

  ngOnInit(): void {
    this.GetAllNotifications();
    this.GetAllDonationCamps();
  }

  changeEventId(eventId : any){
    this.eventId = eventId;
  }

  GetAllNotifications(){
    this.userService.GetAllNotifications().subscribe(data => {
      this.notificationData = data;
    })
  }

  GetAllDonationCamps(){
    this.userService.GetAllCamps().subscribe(data => {
        this.donationCamps = data;
    });
  }

  RegisterForDonationCamp(eventId : any){
    console.log(this.eventId);
    let camp : CampRegister = {
      EventId : this.eventId,
      UserId : this.UserId,
      IsDonated : 0
    };
    if(localStorage.getItem('role') == "User"){
    this.userService.RegisterCamp(camp).subscribe(data => {
      if(data == true){
        alert("Registered Successfully");
      }
      else{
        alert("You have already registered for the event")
      }
    })
  }
  else{
    this.router.navigate(['/Login']);
  }
}

}
