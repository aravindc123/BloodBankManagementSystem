import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  toggle  = true;

  @Input() value: any;

  ngOnInit(): void {
  }

  toggleBtn(){
    this.toggle = !this.toggle;
  }

}
