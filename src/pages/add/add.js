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
import { PostdetailPage } from '../postdetail/postdetail';
/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postdetail = PostdetailPage;
        this.categorygrid = [{ img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '12', favourity: '11' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '12', favourity: '34' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '32', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31', favourity: '15' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34', favourity: '65' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '42', favourity: '23' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '20', favourity: '21' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '20', favourity: '21' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }];
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPagePage');
    };
    AddPage = __decorate([
        Component({
            selector: 'page-add',
            templateUrl: 'add.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.js.map