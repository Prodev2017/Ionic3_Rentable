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
        this.initAutocomplete();
    };
    // initAutocomplete() {
    //   Geolocation.getCurrentPosition().then((position) => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     let mapOptions = {
    //       center: latLng,
    //       zoom: 15,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //   }, (err) => {
    //     console.log(err);
    //   });
    //   // Create the search box and link it to the UI element.
    //   var input = document.getElementById('pac-input');
    //   var searchBox = new google.maps.places.SearchBox(input);
    //   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    //   // Bias the SearchBox results towards current map's viewport.
    //   this.map.addListener('bounds_changed', function() {
    //     searchBox.setBounds(this.map.getBounds());
    //   });
    //   var markers = [];
    //   // Listen for the event fired when the user selects a prediction and retrieve
    //   // more details for that place.
    //   searchBox.addListener('places_changed', function() {
    //     var places = searchBox.getPlaces();
    //     if (places.length == 0) {
    //       return;
    //     }
    //     // Clear out the old markers.
    //     markers.forEach(function(marker) {
    //       marker.setMap(null);
    //     });
    //     markers = [];
    //     // For each place, get the icon, name and location.
    //     var bounds = new google.maps.LatLngBounds();
    //     places.forEach(function(place) {
    //       if (!place.geometry) {
    //         console.log("Returned place contains no geometry");
    //         return;
    //       }
    //       var icon = {
    //         url: place.icon,
    //         size: new google.maps.Size(71, 71),
    //         origin: new google.maps.Point(0, 0),
    //         anchor: new google.maps.Point(17, 34),
    //         scaledSize: new google.maps.Size(25, 25)
    //       };
    //       // Create a marker for each place.
    //       markers.push(new google.maps.Marker({
    //         map: this.map,
    //         icon: icon,
    //         title: place.name,
    //         position: place.geometry.location
    //       }));
    //       if (place.geometry.viewport) {
    //         // Only geocodes have viewport.
    //         bounds.union(place.geometry.viewport);
    //       } else {
    //         bounds.extend(place.geometry.location);
    //       }
    //     });
    //     this.map.fitBounds(bounds);
    //   });
    // }
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
            position: this.map.getCenter(),
            draggable: true
        });
        var content = "";
        this.addInfoWindow(marker, content);
    };
    MapModal.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        console.log('content', content);
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