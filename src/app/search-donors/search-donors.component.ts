import { Component, OnInit } from '@angular/core';
import { Donor } from '../_models/donor';
import { UserService } from '../_services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-search-donors',
  templateUrl: './search-donors.component.html',
  styleUrls: ['./search-donors.component.css']
})

export class SearchDonorsComponent implements OnInit {
  bloodGroup? : string = "";
  city? : string = "";
  donorData? : Donor[];
  filteredList? : Donor[];
  constructor(private userService : UserService) { 
    
  }

  ngOnInit(): void {
    this.GetAllDonors();
  }

  changeCity(event : any){
    console.log(this.city);
    
    if(this.city == "" && this.bloodGroup == ""){
      this.donorData = this.filteredList!;
    }
    else if(this.city != "" && this.bloodGroup == ""){
      this.donorData  = this.filteredList?.filter(a => a.City == this.city )!;
    }
    else if(this.bloodGroup != "" && this.city == ""){
      this.donorData  = this.filteredList?.filter(a => a.BloodGroup == this.bloodGroup)!;
    }
    else if(this.city != "" && this.bloodGroup != ""){
      this.donorData  = this.filteredList?.filter(a => a.City == this.city && a.BloodGroup == this.bloodGroup)!;
    }
    
  }

  GetAllDonors(){
    this.userService.GetDonors().subscribe(data => {
      this.donorData = data;
      this.filteredList = data;
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
