var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { allPages } from '../pages/common/declerations';
import { DirectivesModule } from '../directives/directives.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
var firebaseConfig = {
    apiKey: "AIzaSyDt_BaO5QxQo3mr8XaigDsoVnPtPn05ejg",
    authDomain: "angular2firebase-e2368.firebaseapp.com",
    databaseURL: "https://angular2firebase-e2368.firebaseio.com",
    projectId: "angular2firebase-e2368",
    storageBucket: "angular2firebase-e2368.appspot.com",
    messagingSenderId: "678978519421"
};
var APP_Pages = [];
for (var i in allPages) {
    APP_Pages.push(allPages[i]);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                APP_Pages
            ],
            imports: [
                BrowserModule,
                HttpModule,
                DirectivesModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                APP_Pages
            ],
            providers: [
                StatusBar,
                SplashScreen,
                DirectivesModule,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthenticateProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map