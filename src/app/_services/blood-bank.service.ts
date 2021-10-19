import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BloodStock } from '../_models/blood-bank';
import { CampRegister, Camps, DonationCamp, EventRegister } from '../_models/camps';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  url = "https://localhost:44309/api/BloodBank"

  constructor(private http : HttpClient) { }

  GetBloodStock(bloodBankId : number) : Observable<BloodStock>{
    return this.http.get<BloodStock>(this.url + "/GetBloodStock/" + bloodBankId);
  }

  UpdateBloodStock(bloodStock : BloodStock) : Observable<any> {
    return this.http.put(this.url+"/UpdateBloodStocks/"+bloodStock.StockId,bloodStock);
  }

  GetAllCamps(bloodBankId : number) : Observable<Camps[]>{
    return this.http.get<Camps[]>(this.url+"/GetAllEvents/"+bloodBankId);
  }

  AddCamps(donationCamp : DonationCamp) : Observable<DonationCamp>{
    return this.http.post(this.url+"/InsertCamp",donationCamp);
  }

  GetAllRegisteredDonors(eventId : number) : Observable<EventRegister[]>{
    return this.http.get<EventRegister[]>(this.url+"/GetEventRegisteredUsers/"+eventId);
  }

  MarkDonated(camp : CampRegister) : Observable<any>{
    return this.http.put(this.url+"/MarkDonated",camp);
  }

  DeleteCamp(eventId : any) : Observable<any>{
    return this.http.delete(this.url+"/DeleteEvent/"+eventId);
  }

}
