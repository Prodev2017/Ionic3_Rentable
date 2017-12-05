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

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileprovier: ProfileProvider) {
    this.formtype=navParams.get("type");
    this.data=navParams.get("data");
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
