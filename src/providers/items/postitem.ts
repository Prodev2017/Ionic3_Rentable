import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSetting } from '../api_route';

@Injectable()
export class Postitemprovider {

  apiUrl = this.appSettings.getApiURL();

  constructor(public http: Http, public appSettings: AppSetting) {
  	this.http=http;
    console.log('Hello PaymentProvider Provider');
  }

  public Itemsave(fairprice,
      dailyprice,
      weeklyprice,
      fee,
      distance,
      deliver,
      itemtitle,
      category,
      conditionmark,
      itemdetails
    ){
      return this.http.post(this.apiUrl+'item/saveitem', 
        {
          fairprice: fairprice,
          dailyprice: dailyprice,
          weeklyprice: weeklyprice,
          fee:fee,
          distance:distance,
          itemtitle: itemtitle,
          category: category,
          conditionmark: conditionmark,
          itemdetails: itemdetails
        });
    }

  public rejectitem(rejectcondition, isremove){
    return this.http.post(this.apiUrl + 'item/reject', {rejectcondtion: rejectcondition, isremove: isremove});
  }

}
