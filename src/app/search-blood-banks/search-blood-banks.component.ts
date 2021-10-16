import { Component, OnInit } from '@angular/core';
import { BloodBank } from '../_models/blood-bank';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-search-blood-banks',
  templateUrl: './search-blood-banks.component.html',
  styleUrls: ['./search-blood-banks.component.css']
})
export class SearchBloodBanksComponent implements OnInit {

  bloodBankDetails? : BloodBank[];
  city = "";
  bloodGroup = "";
  filteredList? : BloodBank[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.GetAllBloodBank();
  }

  GetAllBloodBank(){
    this.userService.GetBloodBanks().subscribe(data => {
      this.bloodBankDetails = data;
      this.filteredList = data;
      console.log(data);
    })
  }

  changeCity(event : any){
    if(this.city == ""){
      this.bloodBankDetails = this.filteredList;
    }
    else{
      this.bloodBankDetails = this.filteredList?.filter(a => a.City == this.city);
    }
  }

}
