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
import { PhotoLibrary } from '@ionic-native/photo-library';
/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, imagepicker, cropservice, photolibrary) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagepicker = imagepicker;
        this.cropservice = cropservice;
        this.photolibrary = photolibrary;
        this.postdetail = PostdetailPage;
        this.categorygrid = [{ img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '12', favourity: '11' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '12', favourity: '34' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '32', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31', favourity: '15' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34', favourity: '65' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '42', favourity: '23' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '20', favourity: '21' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '20', favourity: '21' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }];
        this.options = {
            maximumImagesCount: 30,
            width: 800,
            height: 800,
            quality: 80
        };
        this.imagelist = new Array();
        // this.imagepicker.getPictures(this.options).then(
        //   file_uris => {
        //     this.imagelist=file_uris;
        //     console.log(this.imagelist);
        //   },
        //   err => console.log('uh oh')
        // );
        var i = 1;
        var image = [];
        var photourlname;
        var thumname;
        var filename;
        image[0] = "assets/icon/camera.png";
        this.photolibrary.requestAuthorization().then(function () {
            _this.photolibrary.getLibrary().subscribe({
                next: function (library) {
                    console.log("start");
                    library.forEach(function (libraryItem) {
                        console.log("foreach");
                        image[i] = libraryItem.fileName;
                        i++;
                        photourlname = libraryItem.photoURL;
                        thumname = libraryItem.thumbnailURL;
                        filename = "libraryItem.fileName";
                        console.log(libraryItem.id); // ID of the photo
                        console.log(libraryItem.photoURL); // Cross-platform access to photo
                        console.log(libraryItem.thumbnailURL); // Cross-platform access to thumbnail
                        console.log(libraryItem.fileName);
                        console.log(libraryItem.width);
                        console.log(libraryItem.height);
                        console.log(libraryItem.creationDate);
                        console.log(libraryItem.latitude);
                        console.log(libraryItem.longitude);
                        console.log(libraryItem.albumIds);
                    });
                },
                error: function (err) { console.log('could not get photos'); },
                complete: function () { console.log('done getting photos'); }
            });
        })
            .catch(function (err) { return console.log('permissions weren\'t granted'); });
        this.imagelist = image;
        this.photourlname = photourlname;
        this.thumname = thumname;
        this.filename = filename;
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
    AddPage = __decorate([
        Component({
            selector: 'page-add',
            templateUrl: 'add.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ImagePicker,
            Crop,
            PhotoLibrary])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.js.map