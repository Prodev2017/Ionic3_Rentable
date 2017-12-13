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
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Device } from '@ionic-native/device';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { FCM } from "@ionic-native/fcm";
import { Register } from '../register/register';
import { TabPage } from '../tab/tab';
var Login = /** @class */ (function () {
    function Login(navCtrl, alertCtrl, navParams, afAuth, device, fcm, authporvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.device = device;
        this.fcm = fcm;
        this.authporvider = authporvider;
        this.register = Register;
        this.expanded = true;
        this.name = "Matias";
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.email = navParams.get("email");
        console.log(this.email + " email");
        this.fcm.getToken()
            .then(function (token) {
            _this.token = token;
        })
            .catch(function (error) {
            //ocurrió un error al procesar el token
            console.error(error);
        });
    }
    Login.prototype.ionViewWillEnter = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'none';
        }
    };
    Login.prototype.ionViewWillLeave = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'flex';
        }
    };
    Login.prototype.login = function () {
        this.navCtrl.setRoot(TabPage);
        this.type = this.device.platform;
        console.log('device type  ', this.type);
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
    };
    Login.prototype.forgotPassword = function () {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    Login = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            NavParams,
            AngularFireAuth,
            Device,
            FCM,
            AuthenticateProvider])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.js.map