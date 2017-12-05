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
import { PostcostPage } from '../postcost/postcost';
import { AddPage } from '../add/add';
/**
 * Generated class for the PostdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostdetailPage = /** @class */ (function () {
    function PostdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postcost = PostcostPage;
        this.addpage = AddPage;
        this.goodcondition = [1, 2, 3, 4];
        this.badcondition = [1];
        this.categorylist = [
            { active_img: 'assets/icon/cat-nearyou-red.png', title: 'Nearby', inactive_img: 'assets/icon/cat-nearyou-grey.png', value: 'nearby', radionumber: 'radio1' },
            { active_img: 'assets/icon/cat-electronics-red.png', title: 'Electronics', inactive_img: 'assets/icon/cat-electronics-grey.png', value: 'electronics', radionumber: 'radio2' },
            { active_img: 'assets/icon/cat-cars-red.png', title: 'Cars and motors', inactive_img: 'assets/icon/cat-cars-grey.png', value: 'cars', radionumber: 'radio3' },
            { active_img: 'assets/icon/cat-sports-red.png', title: 'Sports and leisure', inactive_img: 'assets/icon/cat-sports-grey.png', value: 'sports', radionumber: 'radio4' },
            { active_img: 'assets/icon/cat-home-red.png', title: 'Home and garden', inactive_img: 'assets/icon/cat-home-grey.png', value: 'home', radionumber: 'radio5' },
            { active_img: 'assets/icon/cat-movies-red.png', title: 'Movies and music', inactive_img: 'assets/icon/cat-movies-grey.png', value: 'movies', radionumber: 'radio6' },
            { active_img: 'assets/icon/cat-fashion-red.png', title: 'Fashion and accessories', inactive_img: 'assets/icon/cat-fashion-grey.png', value: 'fashion', radionumber: 'radio7' },
            { active_img: 'assets/icon/cat-baby-red.png', title: 'Baby and child', inactive_img: 'assets/icon/cat-baby-grey.png', value: 'baby', radionumber: 'radio8' },
            { active_img: 'assets/icon/cat-tools-red.png', title: 'Tools and machines', inactive_img: 'assets/icon/cat-tools-grey.png', value: 'tools', radionumber: 'radio9' },
            { active_img: 'assets/icon/cat-party-red.png', title: 'Party and Events', inactive_img: 'assets/icon/cat-party-grey.png', value: 'party', radionumber: 'radio10' }
        ];
        this.itemtitle = "";
        this.titlenumber = 50;
    }
    PostdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostdetailPage');
    };
    PostdetailPage.prototype.myFunction = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        console.log(event.srcElement + " event.srcElement");
        var parent = event.srcElement.parentElement;
        console.log(parent + " parent");
        var preparent = parent.parentElement;
        var divparent = preparent.parentElement;
        var children = divparent.children;
        console.log(preparent + " preparent");
        var count = children.length;
        console.log(count + "count");
        for (var i = 0; i < count; ++i) {
            if (preparent == children[i]) {
                var image = this.categorylist[i].active_img;
                console.log(children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0] + "children[i]");
                children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", image);
            }
            else {
                var inactiveimage = this.categorylist[i].inactive_img;
                children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
            }
        }
    };
    PostdetailPage.prototype.number = function () {
        var n = this.itemtitle.length;
        console.log(n + " n");
        this.titlenumber = 50 - n;
    };
    PostdetailPage = __decorate([
        Component({
            selector: 'page-postdetail',
            templateUrl: 'postdetail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PostdetailPage);
    return PostdetailPage;
}());
export { PostdetailPage };
//# sourceMappingURL=postdetail.js.map