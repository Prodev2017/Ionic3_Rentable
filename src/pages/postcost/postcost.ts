import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Postitemprovider } from '../../providers/items/postitem';

import { PostdetailPage } from '../postdetail/postdetail';
import { AddPage } from '../add/add';


@Component({
  selector: 'page-postcost',
  templateUrl: 'postcost.html',
})
export class PostcostPage {

	postdetail=PostdetailPage;
  addpage=AddPage;
  deliver:any;
  fee:any;
  itempost:any;
  dailyprice:any;
  weeklyprice:any;
  fairprice:any;
  distance:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postitemprovider: Postitemprovider) {
    this.deliver=false;
    this.itempost=navParams.get("itempost");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostcostPage');
  }

  removefairprice(){
    this.fairprice="";
  }

  removeweeklyprice(){
    this.weeklyprice="";
  }

  removedailyprice(){
    this.dailyprice="";
  }

  removefee(){
    this.fee="";
  }

  backadd(){
    this.navCtrl.setRoot(AddPage);
  }

  backdetail(){
    this.navCtrl.push(PostdetailPage);
  }

  Postitem(){
    this.postitemprovider.Itemsave
    (
      this.fairprice,
      this.dailyprice,
      this.weeklyprice,
      this.fee,
      this.distance,
      this.deliver,
      this.itempost.itemtitle,
      this.itempost.category,
      this.itempost.conditionmark,
      this.itempost.conditiontitle
    ).subscribe(data=>{

    }, 
    err =>{

    });
  }

}
