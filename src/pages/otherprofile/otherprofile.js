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
import { RentPage } from '../rent/rent';
/*
  Generated class for the OtherprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OtherprofilePage = /** @class */ (function () {
    function OtherprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rent = RentPage;
        this.otherprofile = {
            img: 'assets/img/profile-img.png', name: 'John Doe', address: 'Sydney Australia', rate: '4.5', rent_nuber: '10', owner_number: '20'
        };
        this.avaiablelist =
            [
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/22.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/33.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/22.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/33.png', title: 'John', view: '10', favourity: '20' },
            ];
        this.postlist =
            [
                { img: 'assets/img/33.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/22.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/22.png', title: 'John', view: '10', favourity: '20' },
                { img: 'assets/img/33.png', title: 'John', view: '10', favourity: '20' },
            ];
    }
    OtherprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherprofilePagePage');
        this.isavailable = "available";
    };
    OtherprofilePage = __decorate([
        Component({
            selector: 'page-otherprofile',
            templateUrl: 'otherprofile.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], OtherprofilePage);
    return OtherprofilePage;
}());
export { OtherprofilePage };
//# sourceMappingURL=otherprofile.js.map