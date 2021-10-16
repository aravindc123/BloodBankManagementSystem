import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Donor } from '../_models/donor';
import { BloodBank } from '../_models/blood-bank';
import { Notifications } from '../_models/notifications';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "https://localhost:44309/api/Admin"
  constructor(private http : HttpClient) { }
  
  GetAllDonors() : Observable<Donor[]>{
    return this.http.get<Donor[]>(this.url+"/GetDonorDetails");
  }

  GetAllBloodBanks() : Observable<BloodBank[]>{
    return this.http.get<BloodBank[]>(this.url+"/GetBloodBankDetails");
  }

  GetAllNotifications() : Observable<Notifications[]> {
    return this.http.get<Notifications[]>(this.url+"/GetNotifications")
  }

  AddNotification(notification : Notifications) : Observable<any> {
    return this.http.post(this.url+"/InsertNotifications",notification);
  } 

  DeleteNotification(notificationId : number) : Observable<any>{
    return this.http.delete(this.url+"/DeleteNotifications/"+notificationId);
  }

  DeleteDonor(donorId : number) : Observable<any>{
    return this.http.delete(this.url+"/DeleteDonor/"+donorId);
  }

  DeleteBloodBank(bloodBankId : number) : Observable<any>{
    return this.http.delete(this.url+"/DeleteBloodBank/"+bloodBankId);
  }

}
