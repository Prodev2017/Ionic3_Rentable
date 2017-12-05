import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Register } from '../register/register';
import { Home } from '../home/home';
import { TabPage } from '../tab/tab';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  expanded: Boolean;
  register = Register ;
  name:String;
  password:any;
  email:any;
  tabBarElement:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams:NavParams, public afAuth: AngularFireAuth) {
    this.expanded = true;
    this.name="Matias";
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.email=navParams.get("email");
    console.log(this.email + " email");
  }

  ionViewWillEnter() {
    if(this.tabBarElement){
      this.tabBarElement.style.display = 'none';
    }
  }
 
  ionViewWillLeave() {
    if(this.tabBarElement){
      this.tabBarElement.style.display = 'flex';
    }
  }

  login() {
    this.navCtrl.setRoot(TabPage);
    // console.log(this.email);
    //  this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(data => {
    //    localStorage.clear();
    //    localStorage.setItem('uid', data.uid);
    //    this.navCtrl.setRoot(TabPage);
    //  }, err => {
    //    console.log('login Error =--', err);
    //  });
  }

  forgotPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "Enter your email address and we'll help you reset your password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
