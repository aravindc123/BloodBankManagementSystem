import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  toggle  = true;

  @Input() value: any;

  ngOnInit(): void {
    
  }

  get GetUserName(){
    return this.authService.GetUserName();
  }

  toggleBtn(){
    this.toggle = !this.toggle;
  }

}
