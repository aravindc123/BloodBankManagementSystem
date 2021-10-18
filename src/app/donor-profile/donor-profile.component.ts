import { Component, OnInit } from '@angular/core';
import { DonationHistory, Donor } from '../_models/donor';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  userDetails! : Donor;
  donationHistory? : DonationHistory[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('User')!);
    this.userDetails = data; 
    this.GetAllHistory();
  }

  GetAllHistory(){
    this.userService.GetHistory(this.userDetails.UserId!).subscribe(data => {
      this.donationHistory = data;
    })
  }

}
