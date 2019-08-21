import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  title = new Array <noti>();
  constructor() {

    this.title = [{
    
      "t": "Sean",
      "d": "Connery"
    },
    {
      "t": "David",
      "d": "Niven"
    }
  ]
   }
  ngOnInit() {
  }
}

interface noti{
  t: string, d: string
}
