import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  bondActors = new Array <Actor>();
  datetime:any;
  constructor (public navCtrl: NavController) {
    console.log(new Date().toLocaleDateString())
    
    this.bondActors = [{
      "firstName": "Sean",
      "lastName": "Connery"
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
    },
    {
      "firstName": "George",
      "lastName": "Lazenby"
    },
    {
      "firstName": "Roger",
      "lastName": "Moore"
    }
  ]
   }

  ngOnInit() {
    this.datetime = new Date().toLocaleDateString()
  }
  view(){
    this.navCtrl.navigateForward('/detail');    
   }
   test(event){
     console.log(event)
    console.log(event.target.firstElementChild.value)
   }
  }
interface Actor{
  firstName: string, lastName: string
}
