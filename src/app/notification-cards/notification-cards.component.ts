import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-notification-cards',
  templateUrl: './notification-cards.component.html',
  styleUrls: ['./notification-cards.component.css']
})
export class NotificationCardsComponent implements OnInit {

  constructor() { }
  @Input() value: any;

  ngOnInit(): void {
  }

}
