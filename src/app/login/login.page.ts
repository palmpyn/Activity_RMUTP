import { Component, OnInit} from '@angular/core';
import { NavController, Platform, } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // username: string = ""
  // password: string = ""
   constructor(public navCtrl: NavController, public plt:Platform ) {
    this.plt.is('desktop') 
      // This will only print when on iOS
      console.log('I am an desktop device!');
      
    }

  ngOnInit() {
  }
   login(){
     this.navCtrl.navigateForward('/activity/home');
      }
   register(){
    this.navCtrl.navigateForward('/register');
    }
    fgpassword(){
      this.navCtrl.navigateForward('/fgpassword');
      }
}
