import { Injectable, Inject } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticateProvider {

  apiUrl = this.appSettings.getApiURL();
  
  constructor(public http: Http, public appSettings: AppSetting, public local: Storage) {
    this.http = http;
    // code...
  }
  public Sendsms(smsnumber) {
    console.log(smsnumber);
    return this.http.post(this.apiUrl+'service/sendsms', {'phoneNumber': smsnumber});
  }

  public smsverify(smsnumber, digitcode){
    return this.http.post(this.apiUrl+'service/smsverify', {'phoneNumber': smsnumber, 'code':digitcode});
  }

  public sendtoken(uid, token,type ){
    return this.http.post(this.apiUrl+'user/device', {fireId: uid, deviceToken: token,deviceType: type} );
  }

  public signup(Usersignup){
    console.log(Usersignup );
    return this.http.post(this.apiUrl+'user/signup', {
      email: Usersignup.email ,
      phoneNumber: Usersignup.phonenumber ,
      password: Usersignup.password,
      firstName: Usersignup.firstname,
      lastName:Usersignup.lastname ,
      postalCode: Usersignup.postalcode,
      deviceToken:Usersignup.uuid
    });
  }

  public phoneverify(phonenumber){
    return this.http.post(this.apiUrl+'user/hasphone', {'phoneNumber': phonenumber});
  }


}