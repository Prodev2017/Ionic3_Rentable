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
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, imagepicker, cropservice, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagepicker = imagepicker;
        this.cropservice = cropservice;
        this.camera = camera;
        this.postdetail = PostdetailPage;
        this.categorygrid = [{ img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline', price: '12', favourity: '11' }, { img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline', price: '12', favourity: '34' }, { img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price: '32', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '31', favourity: '15' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '34', favourity: '65' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '42', favourity: '23' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }, { img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home', price: '20', favourity: '21' }, { img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie', price: '20', favourity: '21' }, { img: 'assets/img/03.png', title: 'shop', icon: 'md-cart', price: '20', favourity: '21' }, { img: 'assets/img/04.png', title: 'rent', icon: 'md-headset', price: '20', favourity: '21' }];
        this.imagelist = [];
        this.imagelist = JSON.parse(localStorage.getItem('imagelist'));
        console.log('ionviewconstructuer', this.imagelist);
        // for (var i = image.length; i > 0; i--) {
        //   this.imagelist[i]=image[i];
        // }
        //this.imagelist=image;
    }
    AddPage.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.takeimage = imageData;
            _this.imagelist.push(imageData);
        });
    };
    AddPage.prototype.getimage = function () {
        var _this = this;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        var image = [];
        this.imagepicker.getPictures(this.options).then(function (file_uris) {
            image = file_uris;
            if (_this.imagelist.length == 0) {
                _this.imagelist = image;
                localStorage.setItem('imagelist', JSON.stringify(_this.imagelist));
            }
            else {
                _this.imagelist = _this.imagelist.concat(image);
                localStorage.setItem('imagelist', JSON.stringify(_this.imagelist));
            }
        }, function (err) { return console.log('uh oh'); });
    };
    AddPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.cropservice.crop(item, { quality: 75 }).then(function (cropped_image) { return _this.imagelist.push(cropped_image); });
            });
        }, Promise.resolve());
    };
    AddPage.prototype.gopostdetail = function () {
        localStorage.setItem('imagelist', JSON.stringify(this.imagelist));
        this.navCtrl.push(PostdetailPage);
    };
    AddPage.prototype.ionViewDidEnter = function () {
        console.log('ionviewdidenter');
        localStorage.setItem('imagelist', JSON.stringify(this.imagelist));
    };
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        //
    };
    AddPage.prototype.deleteimage = function (n) {
        for (var i = 0; i < this.imagelist.length; i++) {
            if (i == n) {
                console.log('n ++', n);
                this.imagelist.splice(i, 1);
                localStorage.setItem('imagelist', JSON.stringify(this.imagelist));
            }
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
            Camera])
    ], AddPage);
    return AddPage;
}());
export { AddPage };
//# sourceMappingURL=add.js.map