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
import { ItemsProvider } from '../../providers/items/items';
import { ChatdetailPage } from '../chatdetail/chatdetail';
/*
  Generated class for the ChatPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, itemprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemprovider = itemprovider;
        this.chatdetails = ChatdetailPage;
        this.own_rent = "own";
        this.onelist =
            [
                { img: 'assets/img/11.png', title: 'John', item_title: 'house', history: '2 days ago' },
                { img: 'assets/img/22.png', title: 'sizza', item_title: 'apple', history: '3 days ago' },
                { img: 'assets/img/33.png', title: 'jonathan', item_title: 'nut', history: '3 days ago' },
                { img: 'assets/img/11.png', title: 'Josh', item_title: 'pear', history: '5 days ago' },
                { img: 'assets/img/11.png', title: 'Joseph', item_title: 'TV', history: '9 days ago' }
            ];
        this.rentlist =
            [
                { img: 'assets/img/22.png', title: 'John', item_title: 'house', history: '2 days ago' },
                { img: 'assets/img/33.png', title: 'Jane', item_title: 'apple', history: '4 days ago' },
                { img: 'assets/img/11.png', title: 'Eric', item_title: 'nut', history: '6 days ago' },
                { img: 'assets/img/22.png', title: 'Joseph', item_title: 'pear', history: '7 days ago' },
                { img: 'assets/img/33.png', title: 'Joans', item_title: 'TV', history: '8 days ago' }
            ];
        this.itemprovider.Getchatitems(localStorage.getItem('uid')).subscribe(function (data) {
            console.log();
        }, function (err) {
            console.log();
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPagePage');
    };
    ChatPage.prototype.delete = function () {
    };
    ChatPage = __decorate([
        Component({
            selector: 'page-chat',
            templateUrl: 'chat.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ItemsProvider])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.js.map