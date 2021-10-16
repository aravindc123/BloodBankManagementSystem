import { Component, OnInit } from '@angular/core';
import { Notifications } from '../_models/notifications';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificationData? : Notifications[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.GetAllNotifications();
  }

  GetAllNotifications(){
    this.userService.GetAllNotifications().subscribe(data => {
      this.notificationData = data;
    })
  }

}
