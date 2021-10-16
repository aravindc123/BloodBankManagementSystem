import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notifications } from '../_models/notifications';
import { CampRegister, Camps } from '../_models/camps';
import { Donor } from '../_models/donor';
import { BloodBank } from '../_models/blood-bank';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:44309/api/User"

  constructor(private http: HttpClient) { }

  GetAllNotifications() : Observable<Notifications[]> {
    return this.http.get<Notifications[]>("https://localhost:44309/api/Admin/GetNotifications");
  }

  GetAllCamps() : Observable<Camps[]>{
    return this.http.get<Camps[]>(this.url+"/GetEvents");
  }

  RegisterCamp(camp : CampRegister) : Observable<any> {
    return this.http.post(this.url+"/RegisterForEvent",camp);
  }

  GetDonors() : Observable<Donor[]>{
    return this.http.get<Donor[]>(this.url+"/GetDonors");
  }

  GetBloodBanks() : Observable<BloodBank[]>{
    return this.http.get<BloodBank[]>(this.url+"/GetBloodStock");
  }

}
