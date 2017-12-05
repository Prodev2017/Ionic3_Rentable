var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, alertCtrl, Authprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Authprovider = Authprovider;
        this.login = Login;
        this.register = Register;
        this.number = null;
        this.countrycode = 61;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPagePage');
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    };
    LandingPage.prototype.selectcode = function () {
    };
    /* async dolanding(){
       console.log("rascal countrycode" + this.countrycode);
       this.phonenumber=this.countrycode + this.number;
       console.log("rascal phonenumber" + this.phonenumber);
   
       const appVerifier = this.recaptchaVerifier;
       console.log("rascal appVerifier " + appVerifier);
       const phoneNumberString = "+" + this.phonenumber;
       this.navCtrl.setRoot(Login);
   
       firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
         .then( confirmationResult => {
   
           // SMS sent. Prompt user to type the code from the message, then sign the
           // user in with confirmationResult.confirm(code).
           let prompt = this.alertCtrl.create({
           title: 'Enter the Confirmation code',
           inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
           buttons: [
             { text: 'Cancel',
               handler: data => { console.log('Cancel clicked'); }
             },
             { text: 'Send',
               handler: data => {
                 //this.navCtrl.setRoot(Login);
                 confirmationResult.confirm(data.confirmationCode)
                   .then(function (result) {
                     // User signed in successfully.
                     console.log(result.user);
                     console.log("rascal successfully");
                     this.navCtrl.setRoot(Login);
                     // ...
                   }).catch(function (error) {
                     console.log("rascal failed");
                     // User couldn't sign in (bad verification code?)
                     // ...
                   });
               }
             }
           ]
         });
         prompt.present();
       })
       .catch(function (error) {
         console.error("SMS not sent", error);
       });
     }*/
    LandingPage.prototype.dolanding = function () {
        /* this.user = {
          name: 'mumble',
          password: 1234567
        }*/
        this.user = {
            number: this.number
        };
        this.navCtrl.setRoot(Register);
        /*this.Authprovider.authenticate(this.user).then(data =>{
      if (data) {
        this.navCtrl.setRoot(Login);
      }
      else {
        console.log("else");
      }
    },err =>{
      console.log("err racal");
      this.navCtrl.setRoot(Register);
    });*/
    };
    LandingPage = __decorate([
        Component({
            selector: 'page-landing',
            templateUrl: 'landing.html',
            providers: [AuthenticateProvider]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            AuthenticateProvider])
    ], LandingPage);
    return LandingPage;
}());
export { LandingPage };
//# sourceMappingURL=landing.js.map