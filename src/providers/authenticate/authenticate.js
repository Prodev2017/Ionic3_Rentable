var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';
import { Storage } from '@ionic/storage';
var AuthenticateProvider = /** @class */ (function () {
    function AuthenticateProvider(http, appSettings, local) {
        this.http = http;
        this.appSettings = appSettings;
        this.local = local;
        this.apiUrl = this.appSettings.getApiURL();
        this.http = http;
        // code...
    }
    AuthenticateProvider.prototype.Sendsms = function (smsnumber) {
        console.log(smsnumber);
        return this.http.post(this.apiUrl + 'service/sendsms', { 'phoneNumber': smsnumber });
    };
    AuthenticateProvider.prototype.smsverify = function (smsnumber, digitcode) {
        return this.http.post(this.apiUrl + 'service/smsverify', { 'phoneNumber': smsnumber, 'code': digitcode });
    };
    AuthenticateProvider.prototype.sendtoken = function (uid, token, type) {
        return this.http.post(this.apiUrl + 'user/device', { fireId: uid, deviceToken: token, deviceType: type });
    };
    AuthenticateProvider.prototype.signup = function (Usersignup) {
        console.log(Usersignup);
        return this.http.post(this.apiUrl + 'user/signup', {
            email: Usersignup.email,
            phoneNumber: Usersignup.phonenumber,
            password: Usersignup.password,
            firstName: Usersignup.firstname,
            lastName: Usersignup.lastname,
            postalCode: Usersignup.postalcode,
            deviceToken: Usersignup.uuid
        });
    };
    AuthenticateProvider.prototype.phoneverify = function (phonenumber) {
        return this.http.post(this.apiUrl + 'user/hasphone', { 'phoneNumber': phonenumber });
    };
    AuthenticateProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, AppSetting, Storage])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());
export { AuthenticateProvider };
//# sourceMappingURL=authenticate.js.map