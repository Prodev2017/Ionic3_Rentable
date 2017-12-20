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
import { ItemsProvider } from '../../providers/items/items';
import { Geolocation } from 'ionic-native';
import { AcceptPage } from '../accept/accept';
import { PickupPage } from '../pickup/pickup';
import { ClaimownerPage } from '../claimowner/claimowner';
import { OtherprofilePage } from '../otherprofile/otherprofile';
import { ChatdetailPage } from '../chatdetail/chatdetail';
var Details = /** @class */ (function () {
    function Details(navCtrl, navParams, myElement, modalCtrl, zone, viewCtrl, itemprovider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myElement = myElement;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.viewCtrl = viewCtrl;
        this.itemprovider = itemprovider;
        this.showFooter = false;
        this.rentPage = RentPage;
        this.home = Home;
        this.claim = ClaimownerPage;
        this.pickup = PickupPage;
        this.otherprofile = OtherprofilePage;
        this.descriptionstatus = true;
        this.rentalstatus = false;
        this.locationstatus = false;
        this.rent = RentPage;
        this.retrun = AcceptPage; //return process
        // this.Product ={
        //   img: 'assets/img/11.png', ownerimage:'assets/img/profile-img.png', ownername: 'John', item_title:'house', price:'25', description:'this is good rentalable book please use this Thanks', selectdate:'', total_cost:'100'}
        this.detailitem = navParams.get("itemid");
        this.uid = localStorage.getItem('uid');
        this.Product = [];
        this.ionViewLoaded();
        this.messagetext = "";
        this.messagenumber = 350;
        this.itemgoodcondition = [];
        this.itembadcondition = [];
        this.itemprovider.Getitemdetail(this.detailitem).subscribe(function (data) {
            _this.Product = data.json().result.item;
            _this.itemowner = data.json().result.user;
            //this.fullname = data.json().result.user.firstName + " " + data.json().result.user.lastName;
            _this.fullname = "john bell";
            console.log(_this.Product.condition);
            for (var i = 0; i < _this.Product.condition; i++) {
                _this.itemgoodcondition[i] = i;
            }
            for (var j = 0; j < 5 - _this.Product.condition; j++) {
                _this.itembadcondition[j] = j;
            }
            if (_this.Product.condition <= 1) {
                _this.itemconditiontext = "POOR";
            }
            if (_this.Product.condition == 2) {
                _this.itemconditiontext = "FAIR";
            }
            if (_this.Product.condition == 3) {
                _this.itemconditiontext = "GOOD";
            }
            if (_this.Product.condition == 4) {
                _this.itemconditiontext = "VERY GOOD";
            }
            if (_this.Product.condition == 5) {
                _this.itemconditiontext = "EXCELLENT";
            }
        }, function (err) {
            console.log(err);
        });
    }
    Details.prototype.ionViewLoaded = function () {
        this.loadMap();
    };
    Details.prototype.loadMap = function () {
    };
    Details.prototype.number = function () {
        var n = this.messagetext.length;
        this.messagenumber = 350 - n;
    };
    Details.prototype.backicon = function () {
        this.navCtrl.pop();
    };
    Details.prototype.sendrental = function () {
        this.navCtrl.push(RentPage);
        this.itemprovider.SendRental(this.uid, this.detailitem, this.date, this.price).subscribe(function (date) {
            console.log(date);
        }, function (err) {
        });
    };
    Details.prototype.sendmessage = function () {
        this.navCtrl.push(ChatdetailPage, {
            message: this.messagetext
        });
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
    Details.prototype.MyCtrl = function ($scope, $ionicSlideBoxDelegate) {
        $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
        };
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
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ElementRef,
            ModalController,
            NgZone,
            ViewController,
            ItemsProvider])
    ], Details);
    return Details;
}());
export { Details };
//# sourceMappingURL=details.js.map