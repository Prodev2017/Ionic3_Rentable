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
import { FinishsignPage } from '../finishsign/finishsign';
import { Register } from '../register/register';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, Authprovider, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Authprovider = Authprovider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.finishsign = FinishsignPage;
        this.register = Register;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.fullnameChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPagePage');
    };
    SignupPage.prototype.elementChanged = function (input) {
        var field = input.inputControl;
        this[field + "Changed"] = true;
    };
    SignupPage.prototype.facebook = function () {
    };
    SignupPage.prototype.doRegister = function () {
        var _this = this;
        this.submitAttempt = true;
        this.navCtrl.setRoot(FinishsignPage);
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
        }
        else {
            this.Authprovider.register(this.registerForm.value.email, this.registerForm.value.password).then(function (Authprovider) {
                _this.navCtrl.setRoot(FinishsignPage);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
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
            LoadingController])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map