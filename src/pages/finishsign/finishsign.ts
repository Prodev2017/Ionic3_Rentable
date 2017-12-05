import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

import { TabPage } from '../tab/tab';
import { SignupPage } from '../signup/signup';
import { Register } from '../register/register';

@Component({
  selector: 'page-finishsign',
  templateUrl: 'finishsign.html'
})
export class FinishsignPage {

	home=TabPage;
  signup=SignupPage;
  register=Register;
  Usersignup:any;
  finishsignupform:FormGroup;
  firstname:any;
  lastname:any;
  postalcode:any;
  tabBarElement:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authprovier: AuthenticateProvider
  ) {
    this.finishsignupform = formBuilder.group({
      firstname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10), Validators.required])],
      postalcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(10), Validators.required])]
    });
    this.Usersignup=navParams.get("user");
    this.firstname=this.finishsignupform.controls['firstname'];
    this.lastname=this.finishsignupform.controls['lastname'];
    this.postalcode=this.finishsignupform.controls['lastname'];
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishsignPagePage');
  }

  ionViewWillEnter() {
    if(this.tabBarElement){
      this.tabBarElement.style.display = 'none';
    }
  }
 
  ionViewWillLeave() {
    if(this.tabBarElement){
      this.tabBarElement.style.display = 'flex';
    }
  }

  finishsignup(){
    this.Usersignup.firstname=this.firstname.value;
    this.Usersignup.lastname=this.lastname.value;
    this.Usersignup.postalcode=this.postalcode.value;
    this.authprovier.signup(this.Usersignup).subscribe(data=>{
      console.log('sign up--success--', data.json().result.uid);
      localStorage.setItem('uid', data.json().result.uid);
      this.navCtrl.push(TabPage);
    }, err => {
      console.log('signup error --', err);
    });
    
  }

}
