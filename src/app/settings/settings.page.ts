import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navCtrl: NavController) {  }

  ngOnInit() {
  }
  logout(){
    console.log("logout");
    this.navCtrl.navigateForward('');    
   }
   edit(){
    console.log("edit");
    this.navCtrl.navigateForward('editprofile');    
   }
  chpassword(){
    console.log("change");
    this.navCtrl.navigateForward('chpassword');  
  }
}
