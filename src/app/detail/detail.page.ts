import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMaps, Environment,GoogleMapOptions } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  map:GoogleMap;
  show:boolean= true;
  loading: any;
  //xx:boolean= true;
  activitys = new Array <ac>();
  constructor(private platform: Platform, public navCtrl:NavController) {
    this.activitys = [{
      "title": "Sean",
    },
    {
      "title": "Sean",
    },
  ]
   }
  onshow(){
    console.log("isonshow");
    this.show=!this.show;
  //   if(this.show==true){
  //     this.show=false
  //   }
  //   else
  //   this.show=true
   }
   async ngOnInit() {
    await this.platform.ready();
    // await this.loadMap();
}
ionViewDidEnter() {
  this.loadMap();
}
loadMap(){
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyCJ0ZVGqC_uCRu9fBA3AHA0BhRi57hS78Q',
    'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyCJ0ZVGqC_uCRu9fBA3AHA0BhRi57hS78Q'
     });
     let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  
}
confirm(){
  this.navCtrl.navigateForward('confirm');   
}
}
interface ac{
  title: string
}
  // onxx(){
  //   console.log("is");
  //   if(this.xx==true){
  //     console.log("this.xx")
  //     this.xx=false
  //   }
  //   else{
  //     console.log("this")
  //     this.xx=true
  //   }
  // }