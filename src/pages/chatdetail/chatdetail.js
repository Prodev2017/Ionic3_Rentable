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
import { Profile } from '../profile/profile';
import { Details } from '../details/details';
/*
  Generated class for the ChatdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChatdetailPage = /** @class */ (function () {
    function ChatdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = Profile;
        this.details = Details;
        this.Chatdetail = {
            img: 'assets/img/11.png', ownerimage: 'assets/img/profile-img.png', item_title: 'house', price: '25'
        };
    }
    ChatdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatdetailPagePage');
    };
    ChatdetailPage = __decorate([
        Component({
            selector: 'page-chatdetail',
            templateUrl: 'chatdetail.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ChatdetailPage);
    return ChatdetailPage;
}());
export { ChatdetailPage };
//# sourceMappingURL=chatdetail.js.map