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
import { ChatPage } from '../chat/chat';
import { Home } from '../home/home';
import { Myrent } from '../myrent/myrent';
import { AddPage } from '../add/add';
import { AlertsPage } from '../alerts/alerts';
/*
  Generated class for the TabPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TabPage = /** @class */ (function () {
    function TabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = Home;
        this.tab2Root = Myrent;
        this.tab3Root = AddPage;
        this.tab4Root = ChatPage;
        this.tab5Root = AlertsPage;
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabPagePage');
    };
    TabPage = __decorate([
        Component({
            selector: 'page-tab',
            templateUrl: 'tab.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TabPage);
    return TabPage;
}());
export { TabPage };
//# sourceMappingURL=tab.js.map