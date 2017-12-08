var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
var MapModal = /** @class */ (function () {
    function MapModal(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.ionViewLoaded();
    }
    MapModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MapModal.prototype.ionViewLoaded = function () {
        this.loadMap();
    };
    MapModal.prototype.loadMap = function () {
        var _this = this;
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
    MapModal.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapModal.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapModal.prototype.ionViewDidLoad = function () {
        this.loadMap();
        console.log('ionViewDidLoad ModalPagePage');
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapModal.prototype, "mapElement", void 0);
    MapModal = __decorate([
        Component({
            selector: 'page-modal-page',
            templateUrl: 'modal-page.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, ViewController])
    ], MapModal);
    return MapModal;
}());
export { MapModal };
//# sourceMappingURL=modal-page.js.map