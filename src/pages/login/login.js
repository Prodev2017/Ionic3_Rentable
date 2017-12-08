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
import { Register } from '../register/register';
import { TabPage } from '../tab/tab';
var Login = /** @class */ (function () {
    function Login(navCtrl, alertCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.register = Register;
        this.expanded = true;
        this.name = "Matias";
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.email = navParams.get("email");
        console.log(this.email + " email");
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
        // console.log(this.email);
        //  this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(data => {
        //    localStorage.clear();
        //    localStorage.setItem('uid', data.uid);
        //    this.navCtrl.setRoot(TabPage);
        //  }, err => {
        //    console.log('login Error =--', err);
        //  });
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
        __metadata("design:paramtypes", [NavController, AlertController, NavParams, AngularFireAuth])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.js.map