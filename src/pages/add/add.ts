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
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

	postdetail=PostdetailPage;
  categorygrid: Array<any>;
  imagelist:Array<any>;
  options:any;
  photourlname:any;
  thumname:any;
  filename:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public imagepicker: ImagePicker,
    public cropservice: Crop,
    public photolibrary: PhotoLibrary
  ) {
    this.categorygrid = [{img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',price:'12', favourity:'11'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline',price:'12', favourity:'34'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price:'32', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'31', favourity:'15'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'34', favourity:'65'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'42', favourity:'23'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'20', favourity:'21'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'20', favourity:'21'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'}]
    this.options = {
     maximumImagesCount: 30,
     width: 800,
     height: 800,
     quality: 80
    };

    this.imagelist = new Array<string>();
    // this.imagepicker.getPictures(this.options).then(
    //   file_uris => {
    //     this.imagelist=file_uris;
    //     console.log(this.imagelist);
    //   },
    //   err => console.log('uh oh')
    // );

    var i=1;
    var image=[];
    var photourlname;
    var thumname;
    var filename;
    image[0]="assets/icon/camera.png";
    this.photolibrary.requestAuthorization().then(() => {
      
      this.photolibrary.getLibrary().subscribe({
        next: library => {
          console.log("start");
          library.forEach(function(libraryItem) {
            console.log("foreach");
            image[i]=libraryItem.photoURL+libraryItem.fileName;
            i++
            photourlname=libraryItem.photoURL;
            thumname=libraryItem.thumbnailURL;
            filename="libraryItem.fileName";
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));

    this.imagelist=image;
    this.photourlname=photourlname;
    this.thumname=thumname;
    this.filename=filename;
   
    // this.imagepicker.getPictures(this.options)
    // .then((results) => {
    //   this.reduceImages(results).then(() => {
    //     console.log('all images cropped!!');
    //   });
    // }, (err) => { console.log(err) });
    
  }

  reduceImages(selected_pictures: any) : any{
      return selected_pictures.reduce((promise:any, item:any) => {
        return promise.then((result) => {
          return this.cropservice.crop(item, {quality: 75}).then(cropped_image => this.imagelist.push(cropped_image));
        });
      }, Promise.resolve());
    }

  gopostdetail(){
    this.navCtrl.push(PostdetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    

  }

}
