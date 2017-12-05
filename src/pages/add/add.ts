import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { PostdetailPage } from '../postdetail/postdetail';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public imagepicker: ImagePicker) {
    this.categorygrid = [{img: 'assets/icon/camera.png', title: 'apartment', icon: 'ios-home-outline', price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',price:'12', favourity:'11'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline',price:'12', favourity:'34'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price:'32', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'31', favourity:'15'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'34', favourity:'65'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'42', favourity:'23'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'20', favourity:'21'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'20', favourity:'21'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'}]
    var options = {
     maximumImagesCount: 30,
     width: 800,
     height: 800,
     quality: 80
    };

     this.imagepicker.getPictures(options).then(
      file_uris => {
        this.imagelist=file_uris;
        console.log(this.imagelist);
      },
      err => console.log('uh oh')
    );
  }

  gopostdetail(){
    this.navCtrl.push(PostdetailPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPagePage');
  }

}
