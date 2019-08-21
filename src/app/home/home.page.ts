import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { TypePage } from '../type/type.page';





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  value = 0;
  //  bondActors: Actor[];
bondActors = new Array <Actor>();

  constructor(public navCtrl: NavController, private modalcontol: ModalController, private popoverc:PopoverController)  { 
        
    // this.bondActors = [
    //   new Actor("Sean", "Connery"),
      // new Actor("David", "Niven"),
      // new Actor("George", "Lazenby"),
      // new Actor("Roger", "Moore"),
      // new Actor("Timothy", "Dalton"),
      // new Actor("Pierce", "Brosnan"),
      // new Actor("Daniel", "Craig")
    // ];
    this.bondActors = [{
      "firstName": "กิจกรรม",
      "lastName": "วันที่ 20 กรกฎาคม 2562"
    },
    {
      "firstName": "David",
      "lastName": "Niven"
    },
    {
      "firstName": "Sean",
      "lastName": "Connery"
    },
    {
      "firstName": "David",
      "lastName": "Niven"
    }
  ]
  }
  

  ngOnInit() {
    console.log("this.homepage");
  }
   view(){
    this.navCtrl.navigateForward('/detail');    
   }
   notif(){
    this.navCtrl.navigateForward('/notification');    
   }

  async openpopover(ev:Event){
    const popover = await this.popoverc.create({
      component: TypePage,
      componentProps:{
        custom_id: this.value
      },
      event: ev
    });
    popover.present()
  }
 }

interface Actor{
  firstName: string, lastName: string
}
// export class Actor {
//   constructor(public firstName: string, public lastName: string) {
//   }
// }
