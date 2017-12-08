var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { Home } from '../home/home';
import { RejectPage } from '../reject/reject';
import { AcceptPage } from '../accept/accept';
import { Details } from '../details/details';
var RentPage = /** @class */ (function () {
    function RentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = Home;
        this.accept = AcceptPage;
        this.rentreject = RejectPage;
        this.detail = Details;
        this.condition = [0, 1, 2, 3, 4];
        this.goodcondition = [];
        for (var i = 0; i < 3; ++i) {
            this.goodcondition[i] = true;
        }
        for (var i = 3; i < 5; ++i) {
            this.goodcondition[i] = false;
        }
        this.Product = {
            img: 'assets/img/11.png', ownerimage: 'assets/img/profile-img.png', ownername: 'John', item_title: 'house', price: '25', description: 'this is good rentalable book', selectdate: '19/7/2017', total_cost: '100'
        };
        this.renter = {
            img: 'assets/img/profile-img.png', name: 'John', address: 'Sydney Australia', rate: '4.5', rent_nuber: '10', owner_number: '20'
        };
    }
    RentPage.prototype.backdetail = function () {
        this.navCtrl.pop();
    };
    __decorate([
        ViewChild(Navbar),
        __metadata("design:type", Navbar)
    ], RentPage.prototype, "navBar", void 0);
    RentPage = __decorate([
        Component({
            selector: 'page-rent',
            templateUrl: 'rent.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], RentPage);
    return RentPage;
}());
export { RentPage };
//# sourceMappingURL=rent.js.map