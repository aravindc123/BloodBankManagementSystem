import { Component, OnInit } from '@angular/core';
import { Donor } from '../_models/donor';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-manage-donors',
  templateUrl: './manage-donors.component.html',
  styleUrls: ['./manage-donors.component.css']
})
export class ManageDonorsComponent implements OnInit {

  donorDetails? : Donor[];

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.GetAllDonors();
  }

  GetAllDonors(){
    this.adminService.GetAllDonors().subscribe(data => {
      this.donorDetails = data;
  
    });
  }

  DeleteDonors(donorId : any){
    this.adminService.DeleteDonor(donorId).subscribe(data => {
      this.GetAllDonors();
    })
  }

  GetAge(dob : any){
    var timeDiff = Math.abs(Date.now() - this.GetDate(dob));
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

  GetDate(date: any): any {
    const _date = new Date(date);
    return new Date(
      Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate())
    );
  };

}
