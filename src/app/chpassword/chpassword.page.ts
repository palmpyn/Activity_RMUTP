import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-chpassword',
  templateUrl: './chpassword.page.html',
  styleUrls: ['./chpassword.page.scss'],
})
export class ChpasswordPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  savepass(){
    console.log("psave");
    this.navCtrl.navigateForward('activity/settings'); 
  }
}
