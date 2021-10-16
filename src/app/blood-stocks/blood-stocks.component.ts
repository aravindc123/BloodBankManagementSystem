import { Component, OnInit } from '@angular/core';
import { BloodStock } from '../_models/blood-bank';
import { BloodBankService } from '../_services/blood-bank.service';

@Component({
  selector: 'app-blood-stocks',
  templateUrl: './blood-stocks.component.html',
  styleUrls: ['./blood-stocks.component.css']
})
export class BloodStocksComponent implements OnInit {

  bloodBankId? : number; 
  bloodStock? : BloodStock;

  constructor(private bloodBankService : BloodBankService) { }

  ngOnInit(): void {
    this.GetStocks();
  }

  GetStocks(){
    let data = JSON.parse(localStorage.getItem('User')!); 
    this.bloodBankId =  data.BloodBankId;
    this.bloodBankService.GetBloodStock(this.bloodBankId!).subscribe(data => {
      this.bloodStock = data;
      console.log(data);
    });
  }

}
