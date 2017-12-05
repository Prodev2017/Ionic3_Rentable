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
import { EditprofilePage } from '../editprofile/editprofile';
/**
 * Generated class for the ProfileinputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileinputPage = /** @class */ (function () {
    function ProfileinputPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.editprofile = EditprofilePage;
    }
    ProfileinputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileinputPage');
    };
    ProfileinputPage.prototype.removetext = function () {
        this.data = "";
    };
    ProfileinputPage.prototype.update = function () {
    };
    ProfileinputPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profileinput',
            templateUrl: 'profileinput.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ProfileinputPage);
    return ProfileinputPage;
}());
export { ProfileinputPage };
//# sourceMappingURL=profileinput.js.map