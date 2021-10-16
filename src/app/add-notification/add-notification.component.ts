import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Notifications } from '../_models/notifications';
declare var $:any;
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  
  notificationForm! : FormGroup; 
  submitted = false;
  notifications? : Notifications[];
  constructor(private adminServivce : AdminService,private formBuilder : FormBuilder) {
    this.notificationForm = this.formBuilder.group({
      Title : ['',Validators.required],
      Content : ['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.GetAllNotifications();
  }

  get form(){
    return this.notificationForm.controls;
  }

  GetAllNotifications(){
    this.adminServivce.GetAllNotifications().subscribe(data => {
        this.notifications = data;
    });
  }

  AddNotification(data : any){
    this.submitted = true;
    if(this.notificationForm.invalid){
      return;
    }
    else{
      let notification : Notifications = {
        Content : data.Content,
        Title : data.Title
      }
      this.adminServivce.AddNotification(notification).subscribe(data => {
        this.GetAllNotifications();
        this.notificationForm.reset();
      });
    }
  }

  openModal(){
    $('#myModal').modal('show');
    }

  DeleteNotifications(notificationId : any){
    this.adminServivce.DeleteNotification(notificationId).subscribe(data => {
      this.GetAllNotifications();
    })
  }
}
