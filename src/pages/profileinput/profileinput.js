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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/payment/profile';
import { EditprofilePage } from '../editprofile/editprofile';
/**
 * Generated class for the ProfileinputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfileinputPage = /** @class */ (function () {
    function ProfileinputPage(navCtrl, navParams, profileprovier) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileprovier = profileprovier;
        this.editprofile = EditprofilePage;
        this.formtype = navParams.get("type");
        this.data = navParams.get("data");
        this.uuid = localStorage.getItem('uid');
        this.Profiledata = this.profileprovier.Getprofile(this.uuid).subscribe(function (data) {
            _this.firstname = data.json().result.firstName;
            _this.lastname = data.json().result.lastName;
            _this.email = data.json().result.email;
            _this.phonenumber = data.json().result.phoneNumber;
            _this.postalcode = data.json().result.postalCode;
            _this.password = data.json().result.fireId;
            _this.photourl = data.json().result.photoURL;
        }, function (err) {
            console.log(err);
        });
    }
    ProfileinputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileinputPage');
    };
    ProfileinputPage.prototype.removetext = function () {
        this.data = "";
    };
    ProfileinputPage.prototype.save = function () {
        var _this = this;
        // this.profileprovier.ChangeProfile(this.formtype, this.data).subscribe(data =>{
        //   console.log(data);
        // })
        if (this.formtype == "FIRST NAME") {
            this.firstname = this.data;
        }
        if (this.formtype == "LAST NAME") {
            this.lastname = this.data;
        }
        if (this.formtype == "MOBILE NUMBER") {
            this.phonenumber = this.data;
        }
        if (this.formtype == "EMAIL") {
            this.email = this.data;
        }
        if (this.formtype == "PASSWORD") {
            this.password = this.data;
        }
        if (this.formtype == "POSTAL CODE") {
            this.postalcode = this.data;
        }
        this.profileprovier.ChangeProfile(this.email, this.phonenumber, this.password, this.firstname, this.lastname, this.photourl, this.postalcode).subscribe(function (data) {
            alert("success update");
            _this.navCtrl.popTo(EditprofilePage);
        }, function (err) {
            alert("error");
        });
    };
    ProfileinputPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profileinput',
            templateUrl: 'profileinput.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ProfileProvider])
    ], ProfileinputPage);
    return ProfileinputPage;
}());
export { ProfileinputPage };
//# sourceMappingURL=profileinput.js.map