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
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
//import { FCM } from "@ionic-native/fcm";
import { allPages } from '../pages/common/declerations';
import { DirectivesModule } from '../directives/directives.module';
import { ValidatorsModule } from '../validators/validators.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { AppSetting } from '../providers/api_route';
import { PaymentProvider } from '../providers/payment/payment';
import { ProfileProvider } from '../providers/payment/profile';
import { Postitemprovider } from '../providers/items/postitem';
import { ItemsProvider } from '../providers/items/items';
import { ChatProvider } from '../providers/chat/chat';
import { ImageuploadProvider } from '../providers/imageupload/imageupload';
import { NoodlioPay } from '../pages/stripe/pay/noodliopay';
var firebaseConfig = {
    apiKey: "AIzaSyDfySkoXoUcI9Ed39TNJwXnntSg8nKyt10",
    authDomain: "rental-335fb.firebaseapp.com",
    databaseURL: "https://rental-335fb.firebaseio.com",
    projectId: "rental-335fb",
    storageBucket: "rental-335fb.appspot.com",
    messagingSenderId: "637150074544"
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
                ValidatorsModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
                AngularFireDatabaseModule,
                AngularFireDatabase,
                IonicStorageModule.forRoot(),
                IonicModule.forRoot(MyApp, {
                    backButtonText: '',
                    pageTransition: '',
                })
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
                NativePageTransitions,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthenticateProvider,
                AppSetting,
                PaymentProvider,
                ProfileProvider,
                Postitemprovider,
                AngularFireDatabase,
                File,
                Camera,
                Device,
                ItemsProvider,
                ImagePicker,
                Crop,
                Geolocation,
                //   FCM,
                NoodlioPay,
                ChatProvider,
                ImageuploadProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map