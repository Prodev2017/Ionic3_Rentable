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
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
//firebase auth
import firebase from 'firebase';
/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthenticateProvider = /** @class */ (function () {
    function AuthenticateProvider(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.isLoggedin = false;
        this.AuthToken = null;
        this.fireAuth = firebase.auth();
        this.userData = firebase.database().ref('/userData');
    }
    Object.defineProperty(AuthenticateProvider, "parameters", {
        get: function () {
            return [Http];
        },
        enumerable: true,
        configurable: true
    });
    AuthenticateProvider.prototype.storeUserCredentials = function (token) {
        window.localStorage.setItem('raja', token);
        this.useCredentials(token);
    };
    AuthenticateProvider.prototype.useCredentials = function (token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    };
    AuthenticateProvider.prototype.loadUserCredentials = function () {
        var token = window.localStorage.getItem('raja');
        this.useCredentials(token);
    };
    AuthenticateProvider.prototype.destroyUserCredentials = function () {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    };
    AuthenticateProvider.prototype.authenticate = function (user) {
        var _this = this;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3333/authenticate', user, { headers: headers })
                .subscribe(function (data) {
                console.log(data + "rascal data");
                if (data.json().success) {
                    resolve(true);
                }
            }, function (err) {
                reject(true);
            });
        });
    };
    AuthenticateProvider.prototype.addNumber = function (user) {
        var _this = this;
        var headers = new Headers();
        console.log(user.number + "auth");
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:3333/addnumber', user, { headers: headers })
                .subscribe(function (data) {
                if (data.json().success) {
                    _this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthenticateProvider.prototype.register = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.userData.child(newUser.uid).set({ email: email });
        });
    };
    AuthenticateProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            NavController])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());
export { AuthenticateProvider };
//# sourceMappingURL=authenticate.js.map