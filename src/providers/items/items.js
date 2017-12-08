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
/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ItemsProvider = /** @class */ (function () {
    function ItemsProvider(http, appsetting) {
        this.http = http;
        this.appsetting = appsetting;
        this.apiUrl = this.appsetting.getApiURL();
        this.http = http;
        console.log('Hello ItemsProvider Provider');
    }
    ItemsProvider.prototype.Getitems = function () {
        return this.http.get(this.apiUrl + 'item/getitem');
    };
    ItemsProvider.prototype.addfavourity = function (itemnumber) {
        return this.http.post(this.apiUrl + 'item/addfavourity', { item: itemnumber });
    };
    ItemsProvider.prototype.Alertsave = function (alerttitle, category, location, date, fromprice, toprice, distance, within, sortby) {
        return this.http.post(this.apiUrl + 'item/alertsave', { alerttitle: alerttitle, category: category, location: location, date: date, fromprice: fromprice, toprice: toprice, distance: distance, within: within, sortby: sortby });
    };
    ItemsProvider.prototype.Searchsave = function (category, location, date, fromprice, toprice, distance, within, sortby) {
        return this.http.post(this.apiUrl + 'item/searchsave', { category: category, location: location, date: date, fromprice: fromprice, toprice: toprice, distance: distance, within: within, sortby: sortby });
    };
    ItemsProvider.prototype.Setfavourity = function (uuid) {
        return this.http.post(this.apiUrl + 'item/setfavouirty', { uid: uuid });
    };
    ItemsProvider.prototype.Getfavourity = function (uuid) {
        return this.http.post(this.apiUrl + 'item/showfavouirty', { uid: uuid });
    };
    ItemsProvider.prototype.Getownavailable = function (uuid) {
        return this.http.post(this.apiUrl + 'item/ownavailable', { uid: uuid });
    };
    ItemsProvider.prototype.Getownrent = function (uuid) {
        return this.http.post(this.apiUrl + 'item/ownrent', { uid: uuid });
    };
    ItemsProvider.prototype.Getrenthistory = function (uuid) {
        return this.http.post(this.apiUrl + 'item/renthistory', { uid: uuid });
    };
    ItemsProvider.prototype.Getrentcurrent = function (uuid) {
        return this.http.post(this.apiUrl + 'item/rentcurrent', { uid: uuid });
    };
    ItemsProvider.prototype.Getfullitems = function (uuid) {
        return this.http.post(this.apiUrl + 'item/fullitem', { uid: uuid });
    };
    ItemsProvider.prototype.Getchatitems = function (uuid) {
        return this.http.post(this.apiUrl + 'item/chatitem', { uid: uuid });
    };
    ItemsProvider.prototype.Getalerthistory = function (uuid) {
        return this.http.post(this.apiUrl + 'item/alerthistory', { uid: uuid });
    };
    ItemsProvider.prototype.Getoppotunityhistory = function (uuid) {
        return this.http.post(this.apiUrl + 'item/opptunityhistory', { uid: uuid });
    };
    ItemsProvider.prototype.Getcurrentopputunity = function (uuid) {
        return this.http.post(this.apiUrl + 'item/currenopptunity', { uid: uuid });
    };
    ItemsProvider.prototype.Getitemdetail = function (uuid, itemuid) {
        return this.http.post(this.apiUrl + 'item/itemdetail', { uid: uuid, itemnumber: itemuid });
    };
    ItemsProvider.prototype.SendRental = function (uuid, date, price, itemuid) {
        return this.http.post(this.apiUrl + 'item/sendrental', { uid: uuid, itemnumber: itemuid, date: date, price: price });
    };
    ItemsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, AppSetting])
    ], ItemsProvider);
    return ItemsProvider;
}());
export { ItemsProvider };
//# sourceMappingURL=items.js.map