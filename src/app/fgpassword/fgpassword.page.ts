import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fgpassword',
  templateUrl: './fgpassword.page.html',
  styleUrls: ['./fgpassword.page.scss'],
})
export class FgpasswordPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  savepass(){
    console.log("psave");
    this.navCtrl.navigateForward(''); 
  }
}
