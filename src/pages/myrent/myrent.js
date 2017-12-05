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
import { Likes } from '../likes/likes'; //favourites screen
import { Details } from '../details/details';
var Myrent = /** @class */ (function () {
    function Myrent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.own_rent = "own";
        this.date = "current";
        this.isavailable = "available";
        this.ownshowwhite = false;
        this.rentshowwhite = false;
        this.favourites = Likes;
        this.details = Details;
        this.showdeleteicon = true;
        this.rent_like = [];
        for (var i = 0; i < 4; ++i) {
            this.rent_like[i] = false;
        }
        this.own_like = [];
        for (var i = 0; i < 4; ++i) {
            this.own_like[i] = false;
        }
        this.own_avaiablelist =
            [
                { img: 'assets/img/11.png', title: 'John', view: '10', favourity: '20', id: '0' },
                { img: 'assets/img/22.png', title: 'alex', view: '10', favourity: '20', id: '1' },
                { img: 'assets/img/33.png', title: 'eric', view: '10', favourity: '20', id: '2' },
                { img: 'assets/img/11.png', title: 'kevin', view: '10', favourity: '20', id: '3' },
            ];
        this.own_rentedlist =
            [
                { img: 'assets/img/11.png', title: 'apartment', profileimage: 'assets/img/profile-img.png', profilename: 'John', delete: 'yes', rentday: '5' },
                { img: 'assets/img/22.png', title: 'wedding', profileimage: 'assets/img/profile-img.png', profilename: 'rascal', delete: 'yes', rentday: '2' },
                { img: 'assets/img/33.png', title: 'shop', profileimage: 'assets/img/profile-img.png', profilename: 'sizza', delete: 'yes', rentday: '3' }
            ];
        this.rent_currentlist =
            [
                { img: 'assets/img/11.png', title: 'John', view: '43', favourity: '40', unlike: 'assets/icon/like.png', like: 'assets/icon/like-full.png', islike: 'false', id: '0' },
                { img: 'assets/img/22.png', title: 'jens', view: '234', favourity: '50', unlike: 'assets/icon/like.png', like: 'assets/icon/like-full.png', islike: 'false', id: '1' },
                { img: 'assets/img/33.png', title: 'eric', view: '12', favourity: '26', unlike: 'assets/icon/like.png', like: 'assets/icon/like-full.png', islike: 'false', id: '2' },
                { img: 'assets/img/11.png', title: 'daniel', view: '52', favourity: '23', unlike: 'assets/icon/like.png', like: 'assets/icon/like-full.png', islike: 'false', id: '3' },
            ];
        this.rent_historylist =
            [
                { img: 'assets/img/11.png', title: 'apartment', profileimage: 'assets/img/profile-img.png', profilename: 'John', delete: 'yes', rentday: '5' },
                { img: 'assets/img/22.png', title: 'wedding', profileimage: 'assets/img/profile-img.png', profilename: 'rascal', delete: 'yes', rentday: '3' },
                { img: 'assets/img/33.png', title: 'shop', profileimage: 'assets/img/profile-img.png', profilename: 'sizza', delete: 'yes', rentday: '2' }
            ];
    }
    /*removeItem(item){
      for(var i = 0; i < this.list.length; i++) {
   
        if(this.list[i] == item){
          this.list.splice(i, 1);
        }
   
      }
    }*/
    Myrent.prototype.showdelete = function () {
        this.showdeleteicon = !this.showdeleteicon;
    };
    Myrent.prototype.ownshowheart = function (i) {
        this.own_like[i] = !this.own_like[i];
    };
    Myrent.prototype.rentshowheart = function (i) {
        this.rent_like[i] = !this.rent_like[i];
    };
    Myrent = __decorate([
        Component({
            selector: 'page-myrent',
            templateUrl: 'myrent.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Myrent);
    return Myrent;
}());
export { Myrent };
//# sourceMappingURL=myrent.js.map