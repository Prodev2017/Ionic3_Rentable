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
import { NavController, NavParams, Platform, ViewController, ModalController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
/*
  Generated class for the ShareModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ShareModal = /** @class */ (function () {
    function ShareModal(navCtrl, navParams, platform, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.subject = 'Message from Social Sharing App';
        this.message = 'Take your app development skills to the next level with Mastering Ionic 2 - the definitive guide';
        this.image = 'http://masteringionic2.com/perch/resources/mastering-ionic-2-cover-1-w320.png';
        this.uri = 'http://masteringionic2.com/products/product-detail/s/mastering-ionic-2-e-book';
    }
    ShareModal.prototype.shareViaFacebook = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            SocialSharing.canShareVia('com.apple.social.facebook', _this.message, _this.image, _this.uri)
                .then(function (data) {
                SocialSharing.shareViaFacebook(_this.message, _this.image, _this.uri)
                    .then(function (data) {
                    console.log('Shared via Facebook');
                })
                    .catch(function (err) {
                    console.log('Was not shared via Facebook');
                });
            })
                .catch(function (err) {
                console.log('Not able to be shared via Facebook');
            });
        });
    };
    ShareModal.prototype.shareViaInstagram = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            SocialSharing.shareViaInstagram(_this.message, _this.image)
                .then(function (data) {
                console.log('Shared via shareViaInstagram');
            })
                .catch(function (err) {
                console.log('Was not shared via Instagram');
            });
        });
    };
    ShareModal.prototype.shareViaTwitter = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            SocialSharing.canShareVia('com.apple.social.twitter', _this.message, _this.image, _this.uri)
                .then(function (data) {
                SocialSharing.shareViaFacebook(_this.message, _this.image, _this.uri)
                    .then(function (data) {
                    console.log('Shared via Twitter');
                })
                    .catch(function (err) {
                    console.log('Was not shared via Twitter');
                });
            })
                .catch(function (err) {
                console.log('Not able to be shared via Twitter');
            });
        });
    };
    ShareModal.prototype.shareViaEmail = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            SocialSharing.canShareViaEmail()
                .then(function () {
                SocialSharing.shareViaEmail(_this.message, _this.subject, _this.sendTo)
                    .then(function (data) {
                    console.log('Shared via Email');
                })
                    .catch(function (err) {
                    console.log('Not able to be shared via Email');
                });
            })
                .catch(function (err) {
                console.log('Sharing via Email NOT enabled');
            });
        });
    };
    ShareModal.prototype.close = function () {
        this.viewCtrl.dismiss(); // This works fine
    };
    ShareModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShareModalPage');
    };
    ShareModal = __decorate([
        Component({
            selector: 'page-share-modal',
            templateUrl: 'share-modal.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            Platform, ModalController, ViewController])
    ], ShareModal);
    return ShareModal;
}());
export { ShareModal };
//# sourceMappingURL=share-modal.js.map