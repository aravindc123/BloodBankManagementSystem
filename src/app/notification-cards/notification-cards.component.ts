import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-notification-cards',
  templateUrl: './notification-cards.component.html',
  styleUrls: ['./notification-cards.component.css']
})
export class NotificationCardsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() { }
  @Input() value: any;

  ngOnInit(): void {
  }

}
