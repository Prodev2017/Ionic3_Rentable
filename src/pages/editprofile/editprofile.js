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
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { ProfileProvider } from '../../providers/payment/profile';
import { Profile } from '../profile/profile';
import { ProfileinputPage } from '../profileinput/profileinput';
/*
  Generated class for the EditprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams, profileprovider, camera, loadingCtrl, toastCtrl, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileprovider = profileprovider;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.profile = Profile;
        this.editprofile = {
            img: 'assets/img/profile-img.png', name: 'John Doe', address: 'Sydney Australia', rate: '4.5', rent_nuber: '10', owner_number: '20'
        };
        this.imageURI = "assets/img/profile-img.png";
    }
    EditprofilePage_1 = EditprofilePage;
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditprofilePagePage');
        this.uuid = localStorage.getItem('uid');
        this.Profiledata = this.profileprovider.Getprofile(this.uuid).subscribe(function (data) {
            _this.firstname = data.json().result.firstName;
            _this.lastname = data.json().result.lastName;
            _this.email = data.json().result.email;
            _this.phonenumber = data.json().result.phoneNumber;
            _this.postalcode = data.json().result.phoneNubmer;
            _this.password = data.json().result.fireId;
        }, function (err) {
            console.log(err);
        });
    };
    EditprofilePage.prototype.firstfocus = function () {
        this.navCtrl.push(ProfileinputPage, {
            type: "FIRST NAME"
        });
    };
    EditprofilePage.prototype.lastfocus = function () {
        this.navCtrl.push(ProfileinputPage, {
            type: "LAST NAME"
        });
    };
    EditprofilePage.prototype.mobilefocus = function () {
        this.navCtrl.push(ProfileinputPage, {
            type: "MOBILE NUMBER"
        });
    };
    EditprofilePage.prototype.emailfocus = function () {
        this.navCtrl.push(ProfileinputPage, {
            type: "EMAIL"
        });
    };
    EditprofilePage.prototype.passwordfocus = function () {
        this.navCtrl.push(ProfileinputPage, {
            type: "PASSWORD"
        });
    };
    EditprofilePage.prototype.postalfocus = function () {
        this.navCtrl.setRoot(ProfileinputPage, {
            type: "POSTAL CODE"
        });
    };
    EditprofilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditprofilePage.prototype.getImage = function () {
        var _this = this;
        var filename;
        var imageSource = (this.device.isVirtual ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA);
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: imageSource,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        }
            .then(function (profilePicture) {
            // Send the picture to Firebase Storage
            var selfieRef = firebase.storage().ref('profilePictures/user1/profilePicture.png');
            selfieRef
                .putString(profilePicture, 'base64', { contentType: 'image/png' })
                .then(function (savedProfilePicture) {
                firebase
                    .database()
                    .ref("users/user1/profilePicture")
                    .set(savedProfilePicture.downloadURL);
            });
        });
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            console.log("rascal image", imageData);
            _this.captureurl = 'data:image/jpeg;base64,' + imageData;
            var pictures = firebase.storage().ref();
            filename = Math.floor(Date.now() / 1000);
            var imageref = pictures.child('images/${filename}.jpg');
            var uploadtask = imageref.putString(imageData, 'base64').then(function (snapshot) {
                console.log("success image upload", snapshot);
            });
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
        this.profileprovider.ChangeProfile(this.email, this.phonenumber, this.password, this.firstname, this.lastname, filename, this.postalcode).subscribe(function (data) {
            alert("success update");
            _this.navCtrl.popTo(EditprofilePage_1);
        }, function (err) {
            alert("error");
        });
    };
    EditprofilePage = EditprofilePage_1 = __decorate([
        Component({
            selector: 'page-editprofile',
            templateUrl: 'editprofile.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProfileProvider,
            Camera,
            LoadingController,
            ToastController,
            Device])
    ], EditprofilePage);
    return EditprofilePage;
    var EditprofilePage_1;
}());
export { EditprofilePage };
//# sourceMappingURL=editprofile.js.map