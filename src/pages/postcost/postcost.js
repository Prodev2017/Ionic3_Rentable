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
import { Postitemprovider } from '../../providers/items/postitem';
import { PostdetailPage } from '../postdetail/postdetail';
import { AddPage } from '../add/add';
var PostcostPage = /** @class */ (function () {
    function PostcostPage(navCtrl, navParams, postitemprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postitemprovider = postitemprovider;
        this.postdetail = PostdetailPage;
        this.addpage = AddPage;
        this.deliver = false;
        this.itempost = navParams.get("itempost");
    }
    PostcostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostcostPage');
    };
    PostcostPage.prototype.removefairprice = function () {
        this.fairprice = "";
    };
    PostcostPage.prototype.removeweeklyprice = function () {
        this.weeklyprice = "";
    };
    PostcostPage.prototype.removedailyprice = function () {
        this.dailyprice = "";
    };
    PostcostPage.prototype.removefee = function () {
        this.fee = "";
    };
    PostcostPage.prototype.backadd = function () {
        this.navCtrl.setRoot(AddPage);
    };
    PostcostPage.prototype.backdetail = function () {
        this.navCtrl.push(PostdetailPage);
    };
    PostcostPage.prototype.Postitem = function () {
        this.postitemprovider.Itemsave(this.fairprice, this.dailyprice, this.weeklyprice, this.fee, this.distance, this.deliver, this.itempost.itemtitle, this.itempost.category, this.itempost.conditionmark, this.itempost.conditiontitle).subscribe(function (data) {
        }, function (err) {
        });
    };
    PostcostPage = __decorate([
        Component({
            selector: 'page-postcost',
            templateUrl: 'postcost.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Postitemprovider])
    ], PostcostPage);
    return PostcostPage;
}());
export { PostcostPage };
//# sourceMappingURL=postcost.js.map