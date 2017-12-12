import { Component } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Device } from '@ionic-native/device';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import {FCM, NotificationData} from "@ionic-native/fcm";


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
  type:any;
  token:any;
  constructor
  (
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams:NavParams,
    public afAuth: AngularFireAuth,
    private device: Device,
    private fcm:FCM,
    public authporvider: AuthenticateProvider
  ) {
    this.expanded = true;
    this.name="Matias";
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.email=navParams.get("email");
    console.log(this.email + " email");
    this.fcm.getToken()
      .then((token:string)=>{
        this.token=token;
      })
      .catch(error=>{
        //ocurrió un error al procesar el token
        console.error(error);
      });
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
    this.type = this.device.platform;
    console.log('device type  ',this.type);
    console.log(this.email);
   //  this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(data => {
   //    localStorage.clear();
   //    localStorage.setItem('uid', data.uid);
   //    this.authporvider.sendtoken(data.uid, this.token, this.device).then(data =>{
   //      this.navCtrl.setRoot(TabPage);
   //   });
   // }, err => {
   //   console.log('login Error =--', err);
   // });

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
