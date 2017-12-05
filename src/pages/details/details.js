var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController, NavParams, Content, ViewController } from 'ionic-angular';
import { RentPage } from '../rent/rent';
import { MapModal } from '../modal-page/modal-page';
import { ShareModal } from '../share-modal/share-modal';
import { Home } from '../home/home';
import { Geolocation } from 'ionic-native';
import { AcceptPage } from '../accept/accept';
import { PickupPage } from '../pickup/pickup';
import { ClaimrenterPage } from '../claimrenter/claimrenter';
var Details = /** @class */ (function () {
    function Details(navCtrl, navParams, myElement, modalCtrl, zone, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myElement = myElement;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.viewCtrl = viewCtrl;
        this.showFooter = false;
        this.rentPage = RentPage;
        this.home = Home;
        this.claim = ClaimrenterPage;
        this.pickup = PickupPage;
        this.descriptionstatus = true;
        this.rentalstatus = false;
        this.locationstatus = false;
        this.rent = RentPage;
        this.retrun = AcceptPage; //return process
        this.goodcondition = [1, 2, 3];
        this.badcondition = [1, 2];
        this.Product = {
            img: 'assets/img/11.png', ownerimage: 'assets/img/profile-img.png', ownername: 'John', item_title: 'house', price: '25', description: 'this is good rentalable book please use this Thanks', selectdate: '', total_cost: '100'
        };
        this.ionViewLoaded();
    }
    Details.prototype.ionViewLoaded = function () {
        this.loadMap();
    };
    Details.prototype.loadMap = function () {
    };
    Details.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    Details.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    Details.prototype.ngOnInit = function () {
        this.toggle_footer(false);
    };
    Details.prototype.toggle_footer = function (show) {
        var _this = this;
        console.log('toggling');
        if (show) {
            document.querySelector(".detFooter")['style'].display = 'block';
            document.querySelector("page-details .scroll-content")['style'].marginBottom = 0;
            document.querySelector("page-details .fixed-content")['style'].marginBottom = 0;
            this.zone.run(function () {
                _this.showFooter = true;
            });
        }
        else {
            document.querySelector(".detFooter")['style'].display = 'none';
            document.querySelector("page-details .scroll-content")['style'].marginBottom = 0;
            document.querySelector("page-details .fixed-content")['style'].marginBottom = 0;
            this.zone.run(function () {
                _this.showFooter = false;
            });
        }
    };
    Details.prototype.goto = function () {
        this.content.scrollToBottom(300); //300ms animation speed
    };
    Details.prototype.detect_position = function () {
        if (this.content.scrollTop > document.querySelector('body').offsetHeight - 100) {
            return true;
        }
        else
            return false;
    };
    Details.prototype.scrollingFun = function (e) {
        if (e.scrollTop > this.contentHandle.getContentDimensions().contentHeight - 200) {
            this.toggle_footer(true);
        }
        else {
            this.toggle_footer(false);
        }
    };
    Details.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(MapModal);
        modal.present();
    };
    Details.prototype.presentShare = function () {
        var Share = this.modalCtrl.create(ShareModal);
        Share.present();
    };
    Details.prototype.ActiveLike = function () {
        this.like = !this.like;
    };
    Details.prototype.itemSelected = function () {
        console.log("hidden");
        this.descriptionstatus = false;
    };
    Details.prototype.stopPlayback = function () {
        console.log("show");
        this.descriptionstatus = true;
    };
    Details.prototype.rentalhide = function () {
        console.log("hidden");
        this.rentalstatus = false;
    };
    Details.prototype.rentalshow = function () {
        console.log("show");
        this.rentalstatus = true;
    };
    Details.prototype.locationhide = function () {
        console.log("hidden");
        this.locationstatus = false;
    };
    Details.prototype.locationshow = function () {
        var _this = this;
        console.log("show");
        this.locationstatus = true;
        Geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Details.prototype, "content", void 0);
    __decorate([
        ViewChild("contentRef"),
        __metadata("design:type", Content)
    ], Details.prototype, "contentHandle", void 0);
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], Details.prototype, "mapElement", void 0);
    Details = __decorate([
        Component({
            selector: 'page-details',
            templateUrl: 'details.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ElementRef, ModalController, NgZone, ViewController])
    ], Details);
    return Details;
}());
export { Details };
//# sourceMappingURL=details.js.map