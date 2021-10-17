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
  APositive? : number; 
  BPositive? : number; 
  OPositive? : number; 
  ABPositive? : number; 
  ANegative? : number; 
  BNegative? : number; 
  ONegative? : number; 
  ABNegative? : number; 

  constructor(private bloodBankService : BloodBankService) { }

  ngOnInit(): void {
    this.GetStocks();
  }

  GetStocks(){
    let data = JSON.parse(localStorage.getItem('User')!); 
    this.bloodBankId =  data.BloodBankId;
    this.bloodBankService.GetBloodStock(this.bloodBankId!).subscribe(data => {
      this.bloodStock = data;
      console.log(data.APositive);
      this.APositive = data.ABPositive; 
      this.BPositive = data.BPositive; 
      this.OPositive = data.OPositive; 
      this.ABPositive = data.ABPositive; 
      this.ANegative = data.ANegative; 
      this.BNegative = data.BNegative; 
      this.ONegative = data.ONegative; 
      this.ABNegative = data.ABNegative;
      console.log(data);
    });
  }

  UpdateBloodStock(){
    let bloodStock : BloodStock = {
      StockId : this.bloodStock?.StockId,
      BloodBankId : this.bloodBankId,
      APositive : this.APositive,
      BPositive : this.BPositive,
      OPositive : this.OPositive,
      ABPositive : this.ABPositive,
      ANegative : this.ANegative,
      BNegative : this.BNegative,
      ONegative : this.ONegative,
      ABNegative : this.ABNegative
    }
    console.log(bloodStock);
    this.bloodBankService.UpdateBloodStock(bloodStock).subscribe(data => {
      if(data){
        alert("Stock Updated");
      }
      else{
        alert("Failed");
      }
    });
  }

}
