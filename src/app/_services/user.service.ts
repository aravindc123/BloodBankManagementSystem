import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notifications } from '../_models/notifications';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:44309/api/User"

  constructor(private http: HttpClient) { }

  GetAllNotifications() : Observable<Notifications[]> {
    return this.http.get<Notifications[]>("https://localhost:44309/api/Admin/GetNotifications");
  }

}
