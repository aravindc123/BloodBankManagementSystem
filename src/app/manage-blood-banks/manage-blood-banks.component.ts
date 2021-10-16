import { Component, OnInit } from '@angular/core';
import { BloodBank } from '../_models/blood-bank';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-manage-blood-banks',
  templateUrl: './manage-blood-banks.component.html',
  styleUrls: ['./manage-blood-banks.component.css']
})
export class ManageBloodBanksComponent implements OnInit {

  bloodBankDetails? : BloodBank[];

  constructor(private adminServivce : AdminService) { }

  ngOnInit(): void {
    this.GetAllBloodBanks();
  }

  GetAllBloodBanks(){
    this.adminServivce.GetAllBloodBanks().subscribe(data => {
      this.bloodBankDetails = data;
    })
  }

  DeleteBloodBanks(bloodBankId : any){
    this.adminServivce.DeleteBloodBank(bloodBankId).subscribe(data => {
      this.GetAllBloodBanks();
    });
  }

}
