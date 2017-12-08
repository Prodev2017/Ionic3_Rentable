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
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { SignupPage } from '../signup/signup';
import { FinishsignPage } from '../finishsign/finishsign';
var Register = /** @class */ (function () {
    function Register(navCtrl, navParams, formBuilder, Authprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.Authprovider = Authprovider;
        this.signup = SignupPage;
        this.finishsign = FinishsignPage;
        this.formgroup = formBuilder.group({
            digitcode: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
        this.Usersignup = [];
        this.digitcode = this.formgroup.controls['digitcode'];
        this.phonenumber = navParams.get("pnumber");
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    Register.prototype.ionViewWillEnter = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'none';
        }
    };
    Register.prototype.ionViewWillLeave = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'flex';
        }
    };
    Register.prototype.gosignup = function () {
        var _this = this;
        this.Usersignup.phonenumber = this.phonenumber;
        // this.navCtrl.push(SignupPage,{
        //       user: this.Usersignup
        //     });
        this.Authprovider.smsverify(this.phonenumber, this.digitcode.value).subscribe(function (data) {
            var res = data.json().success;
            console.log('hehe', res);
            if (!res)
                alert('Please reenter your sms code');
            else
                _this.navCtrl.push(SignupPage, {
                    user: _this.Usersignup
                });
        });
    };
    Register = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
            providers: [AuthenticateProvider]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            AuthenticateProvider])
    ], Register);
    return Register;
}());
export { Register };
//# sourceMappingURL=register.js.map