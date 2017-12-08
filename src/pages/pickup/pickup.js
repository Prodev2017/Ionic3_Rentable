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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';
/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PickupPage = /** @class */ (function () {
    function PickupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.details = Details;
        this.active_flag = true;
        this.agree = "no";
    }
    PickupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickupPage');
    };
    PickupPage.prototype.godetail = function () {
        this.navCtrl.pop();
    };
    PickupPage.prototype.radioChecked = function () {
        if (this.agree == "no") {
            this.active_flag = true;
        }
        else {
            this.active_flag = false;
        }
    };
    PickupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pickup',
            templateUrl: 'pickup.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PickupPage);
    return PickupPage;
}());
export { PickupPage };
//# sourceMappingURL=pickup.js.map