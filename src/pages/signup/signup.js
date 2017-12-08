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
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Device } from '@ionic-native/device';
import { FinishsignPage } from '../finishsign/finishsign';
import { Register } from '../register/register';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, Authprovider, formBuilder, alertCtrl, loadingCtrl, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Authprovider = Authprovider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.device = device;
        this.finishsign = FinishsignPage;
        this.register = Register;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.fullnameChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), Validators.maxLength(80)])],
            password: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
            confirmpassword: ['', Validators.compose([Validators.minLength(10), Validators.required, Validators.maxLength(50)])]
        });
        this.Usersignup = navParams.get("user");
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPagePage');
        this.email = this.registerForm.controls['email'];
        this.password = this.registerForm.controls['password'];
        this.confirmpassword = this.registerForm.controls['confirmpassword'];
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'none';
        }
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'flex';
        }
    };
    SignupPage.prototype.elementChanged = function (input) {
        var field = input.inputControl;
        this[field + "Changed"] = true;
    };
    SignupPage.prototype.facebook = function () {
    };
    SignupPage.prototype.doRegister = function () {
        this.Usersignup.email = this.email.value;
        this.Usersignup.password = this.password.value;
        this.uuid = this.device.uuid;
        console.log('device token', this.uuid);
        console.log(this.Usersignup.phonenumber);
        this.navCtrl.setRoot(FinishsignPage, {
            user: this.Usersignup
        });
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthenticateProvider,
            FormBuilder,
            AlertController,
            LoadingController,
            Device])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map