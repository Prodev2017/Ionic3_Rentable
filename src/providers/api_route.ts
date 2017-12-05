import { Injectable } from '@angular/core';

const CONFIG = {
	apiUrl: 'http://172.16.1.151:2000/api/'
};
@Injectable()
export class AppSetting {
	
	constructor() {
		// code...
	}

	public getApiURL(){
		return CONFIG.apiUrl;
	}
}