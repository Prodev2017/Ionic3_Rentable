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
import { AddpaymentPage } from '../addpayment/addpayment';
/*
  Generated class for the CreditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CreditPage = /** @class */ (function () {
    function CreditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = 'password';
        this.showPass = false;
        this.addpayment = AddpaymentPage;
        this.iscard = false;
    }
    CreditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditPagePage');
    };
    CreditPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    CreditPage.prototype.fromprice = function () {
    };
    CreditPage.prototype.f = function () {
        console.log(this.cardnumber + "cardnumber");
        if (this.cardnumber == "4") {
            this.iscard = true;
        }
        if (this.cardnumber == "51" || this.cardnumber == "55") {
            this.iscard = false;
        }
    };
    CreditPage.prototype.removename = function () {
        this.name = "";
    };
    CreditPage.prototype.removenumber = function () {
        this.cardnumber = "";
    };
    CreditPage.prototype.cleardate = function () {
    };
    CreditPage.prototype.save = function () {
    };
    CreditPage.prototype.toggleShow = function () {
    };
    CreditPage = __decorate([
        Component({
            selector: 'page-credit',
            templateUrl: 'credit.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], CreditPage);
    return CreditPage;
}());
export { CreditPage };
//# sourceMappingURL=credit.js.map