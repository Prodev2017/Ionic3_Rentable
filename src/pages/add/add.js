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
import { ImagePicker } from '@ionic-native/image-picker';
import { PostdetailPage } from '../postdetail/postdetail';
import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, imagepicker, cropservice, photolibrary, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagepicker = imagepicker;
        this.cropservice = cropservice;
        this.photolibrary = photolibrary;
        this.camera = camera;
        this.postdetail = PostdetailPage;
        this.categorygrid = [{ img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '12', favourity: '11' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '12', favourity: '34' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '32', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31', favourity: '15' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34', favourity: '65' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '42', favourity: '23' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '20', favourity: '21' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '20', favourity: '21' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }];
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        var j = 1;
        var image = [];
        //this.imagelist[0]="assets/icon/camera.png";
        this.imagelist = new Array();
        this.imagepicker.getPictures(this.options).then(function (file_uris) {
            _this.imagelist = file_uris;
        }, function (err) { return console.log('uh oh'); });
        // for (var i = image.length; i > 0; i--) {
        //   this.imagelist[i]=image[i];
        // }
        //this.imagelist=image;
        // this.photolibrary.requestAuthorization().then(() => {
        //   this.photolibrary.getLibrary().subscribe({
        //     next: library => {
        //       console.log("start");
        //       library.forEach(function(libraryItem) {
        //         console.log("foreach");
        //         image[i]=libraryItem.fileName;
        //         i++
        //         photourlname=libraryItem.photoURL;
        //         thumname=libraryItem.thumbnailURL;
        //         filename="libraryItem.fileName";
        //         console.log(libraryItem.id);          // ID of the photo
        //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
        //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        //         console.log(libraryItem.fileName);
        //         console.log(libraryItem.width);
        //         console.log(libraryItem.height);
        //         console.log(libraryItem.creationDate);
        //         console.log(libraryItem.latitude);
        //         console.log(libraryItem.longitude);
        //         console.log(libraryItem.albumIds);
        //       });
        //     },
        //     error: err => { console.log('could not get photos'); },
        //     complete: () => { console.log('done getting photos'); }
        //   });
        // })
        // .catch(err => console.log('permissions weren\'t granted'));
        // this.imagepicker.getPictures(this.options)
        // .then((results) => {
        //   this.reduceImages(results).then(() => {
        //     console.log('all images cropped!!');
        //   });
        // }, (err) => { console.log(err) });
    }
    AddPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.cropservice.crop(item, { quality: 75 }).then(function (cropped_image) { return _this.imagelist.push(cropped_image); });
            });
        }, Promise.resolve());
    };
    AddPage.prototype.gopostdetail = function () {
        this.navCtrl.push(PostdetailPage);
    };
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    AddPage.prototype.selectimage = function (n) {
        if (n == 0) {
            console.log('camera', n);
        }
        else {
            this.filename = this.imagelist[n];
            console.log('photo', this.filename);
        }
    };
    AddPage = __decorate([
        Component({
            selector: 'page-add',
            templateUrl: 'add.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ImagePicker,
            Crop,
            PhotoLibrary,
            Camera])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.js.map