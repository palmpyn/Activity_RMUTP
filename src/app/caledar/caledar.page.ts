import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular'



@Component({
  selector: 'app-caledar',
  templateUrl: './caledar.page.html',
  styleUrls: ['./caledar.page.scss'],
})
export class CaledarPage implements OnInit {
  // eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

   }
  

  ngOnInit() {
  }

  // addEvent() {
  //   let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
  //   modal.present();
  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       let eventData = data;
 
  //       eventData.startTime = new Date(data.startTime);
  //       eventData.endTime = new Date(data.endTime);
 
  //       let events = this.eventSource;
  //       events.push(eventData);
  //       this.eventSource = [];
  //       setTimeout(() => {
  //         this.eventSource = events;
  //       });
  //     }
  //   });
  // }

  onViewTitleChanged(title) {
    console.log(title);
    this.viewTitle = title;
  }
  // onEventSelected(event) {
  //   let start = moment(event.startTime).format('LLLL');
  //   let end = moment(event.endTime).format('LLLL');
    
  //   let alert = this.alertCtrl.create({
  //     title: '' + event.title,
  //     subTitle: 'From: ' + start + '<br>To: ' + end,
  //     buttons: ['OK']
  //   })
  //   alert.present();
  // }
 
  // onTimeSelected(ev) {
  //   this.selectedDay = ev.selectedTime;
  // }

}
