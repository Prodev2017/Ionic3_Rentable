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
import { Keyboard } from 'ionic-native';
import { AddpaymentPage } from '../addpayment/addpayment';
import { EditprofilePage } from '../editprofile/editprofile';
import { Home } from '../home/home';
import { About } from '../about/about';
import { FeedbackPage } from '../feedback/feedback';
import { LandingPage } from '../landing/landing';
import { MyStats } from '../myitem/myitem';
var Profile = /** @class */ (function () {
    function Profile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addpayment = AddpaymentPage;
        this.editprofile = EditprofilePage;
        this.home = Home;
        this.about = About;
        this.feedback = FeedbackPage;
        this.logout = LandingPage;
        this.mystats = MyStats;
        this.profile = {
            img: 'assets/img/profile-img.png', name: 'John Doe', address: 'Sydney Australia', rate: '4.5', rent_nuber: '10', owner_number: '20'
        };
    }
    Profile.prototype.focusInput = function (input) {
        input.disabled = !input.disabled;
        if (!input.disabled) {
            input.setFocus();
            Keyboard.show(); // Android Mobiles
        }
    };
    Profile = __decorate([
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Profile);
    return Profile;
}());
export { Profile };
//# sourceMappingURL=profile.js.map