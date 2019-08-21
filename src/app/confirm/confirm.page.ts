import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(public navCtrl: NavController ) { }

  ngOnInit() {
  }
  home(){
    this.navCtrl.navigateForward('activity/home');    
   }
  close(){
    this.navCtrl.navigateForward('activity/home');    
   }
}
