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
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { TabPage } from '../tab/tab';
import { SignupPage } from '../signup/signup';
import { Register } from '../register/register';
var FinishsignPage = /** @class */ (function () {
    function FinishsignPage(navCtrl, navParams, formBuilder, authprovier) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authprovier = authprovier;
        this.home = TabPage;
        this.signup = SignupPage;
        this.register = Register;
        this.finishsignupform = formBuilder.group({
            firstname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
            lastname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
            postalcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(10), Validators.required])]
        });
        this.Usersignup = navParams.get("user");
        this.firstname = this.finishsignupform.controls['firstname'];
        this.lastname = this.finishsignupform.controls['lastname'];
        this.postalcode = this.finishsignupform.controls['lastname'];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    FinishsignPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinishsignPagePage');
    };
    FinishsignPage.prototype.ionViewWillEnter = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'none';
        }
    };
    FinishsignPage.prototype.ionViewWillLeave = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'flex';
        }
    };
    FinishsignPage.prototype.finishsignup = function () {
        var _this = this;
        this.Usersignup.firstname = this.firstname.value;
        this.Usersignup.lastname = this.lastname.value;
        this.Usersignup.postalcode = this.postalcode.value;
        this.authprovier.signup(this.Usersignup).subscribe(function (data) {
            console.log('sign up--success--', data.json().result.uid);
            localStorage.clear();
            localStorage.setItem('uid', data.json().result.uid);
            _this.navCtrl.push(TabPage);
        }, function (err) {
            console.log('signup error --', err);
        });
    };
    FinishsignPage = __decorate([
        Component({
            selector: 'page-finishsign',
            templateUrl: 'finishsign.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            AuthenticateProvider])
    ], FinishsignPage);
    return FinishsignPage;
}());
export { FinishsignPage };
//# sourceMappingURL=finishsign.js.map