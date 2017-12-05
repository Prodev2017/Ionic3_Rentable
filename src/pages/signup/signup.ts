import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Device } from '@ionic-native/device';

import { FinishsignPage } from '../finishsign/finishsign';
import { Register } from '../register/register';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	finishsign=FinishsignPage;
  register=Register;
  email: any;
  password: any;
  confirmpassword:any;
  registerForm:FormGroup;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  fullnameChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  Usersignup:any;
  uuid:any;
  tabBarElement:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Authprovider: AuthenticateProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private device: Device
  ) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP),Validators.maxLength(80)])],
      password: ['', Validators.compose([Validators.maxLength(50),Validators.minLength(10), Validators.required])],
      confirmpassword: ['', Validators.compose([Validators.minLength(10), Validators.required,Validators.maxLength(50)])]
    });
    this.Usersignup=navParams.get("user");
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPagePage');
    this.email=this.registerForm.controls['email'];
    this.password=this.registerForm.controls['password'];
    this.confirmpassword=this.registerForm.controls['confirmpassword'];
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

  elementChanged(input){
    let field = input.inputControl;
    this[field + "Changed"] = true;
  }

  facebook(){

  }

  doRegister(){
    this.Usersignup.email=this.email.value;
    this.Usersignup.password=this.password.value;
    this.uuid=this.device.uuid;
    console.log('device token',this.uuid);
    console.log(this.Usersignup.phonenumber);
    this.navCtrl.setRoot(FinishsignPage,{
      user:this.Usersignup
    });

  }

}
