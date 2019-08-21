import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
passedID = null;
  constructor(public navCtrl:NavController, private navPar: NavParams, private popoverc: PopoverController) { }

  ngOnInit() {
    
  }
close(){
  console.log("close");
  this.popoverc.dismiss();
}
category(){
  this.navCtrl.navigateForward('/category');
  this.popoverc.dismiss();
}
}
