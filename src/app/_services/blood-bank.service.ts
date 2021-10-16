import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BloodStock } from '../_models/blood-bank';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  url = "https://localhost:44309/api/BloodBank"

  constructor(private http : HttpClient) { }

  GetBloodStock(bloodBankId : number) : Observable<BloodStock>{
    return this.http.get<BloodStock>(this.url + "/GetBloodStock/" + bloodBankId);
  }

}
