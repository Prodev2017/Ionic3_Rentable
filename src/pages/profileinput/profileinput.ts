import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/payment/profile';

import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the ProfileinputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileinput',
  templateUrl: 'profileinput.html',
})
export class ProfileinputPage {

	editprofile=EditprofilePage;
	data:any;
  formtype:any;
  firstname:any;
  lastname:any;
  email:any;
  phonenumber:any;
  password:any;
  postalcode:any;
  type:any;
  imageURI:any;
  imageFileName:any;
  uuid:any;
  Profiledata:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileprovier: ProfileProvider) {
    this.formtype=navParams.get("type");
    this.data=navParams.get("data");

    this.uuid=localStorage.getItem('uid');
    this.Profiledata=this.profileprovier.Getprofile(this.uuid).subscribe(data =>{
      this.firstname=data.json().result.firstName;
      this.lastname=data.json().result.lastName;
      this.email=data.json().result.email;
      this.phonenumber=data.json().result.phoneNumber;
      this.postalcode=data.json().result.phoneNubmer;
      this.password=data.json().result.fireId;
      console.log("heeeeee", data.json().result);
    },
    err =>{
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileinputPage');
  }

  removetext(){
  	this.data="";
  }

  save(){
    // this.profileprovier.ChangeProfile(this.formtype, this.data).subscribe(data =>{
    //   console.log(data);
    // })
  	this.navCtrl.popTo(EditprofilePage);
  }

}
