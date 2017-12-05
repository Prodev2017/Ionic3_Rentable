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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { MapModal } from '../modal-page/modal-page';
import { AlertsPage } from '../alerts/alerts';
/*
  Generated class for the AlertdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AlertdetailPage = /** @class */ (function () {
    function AlertdetailPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.map = MapModal;
        this.alert = AlertsPage;
        this.showfromprice = false;
        this.showtoprice = false;
        this.alertlist = [
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
        this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'newset', disabled: false })
        });
        this.postwithin = new FormGroup({
            "within": new FormControl({ value: 'all', disabled: false })
        });
    }
    AlertdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPagePage');
    };
    AlertdetailPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(MapModal);
        modal.present();
    };
    AlertdetailPage.prototype.fromprice = function () {
    };
    AlertdetailPage.prototype.toprice = function () {
    };
    AlertdetailPage.prototype.doSubmit = function () {
    };
    AlertdetailPage.prototype.myFunction = function (event) {
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
                var image = this.alertlist[i].active_img;
                console.log(children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0] + "children[i]");
                children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", image);
            }
            else {
                var inactiveimage = this.alertlist[i].inactive_img;
                children[i].getElementsByTagName('label')[0].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
            }
        }
    };
    AlertdetailPage = __decorate([
        Component({
            selector: 'page-alertdetail',
            templateUrl: 'alertdetail.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController, NavParams])
    ], AlertdetailPage);
    return AlertdetailPage;
}());
export { AlertdetailPage };
//# sourceMappingURL=alertdetail.js.map