import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  toggle  = true;

  ngOnInit(): void {
  }

  toggleBtn(){
    this.toggle = !this.toggle;
  }

}
