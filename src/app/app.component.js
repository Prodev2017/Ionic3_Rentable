var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { FCM } from "@ionic-native/fcm";
//import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, fcm, splashScreen, afAuth) {
        var _this = this;
        this.fcm = fcm;
        this.afAuth = afAuth;
        //rootPage:any = TabsPage;
        this.rootPage = LandingPage;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                // you can modify here the page for non. auth users
                _this.rootPage = LandingPage;
                return;
            }
            // page for auth. users
            _this.rootPage = LandingPage;
        });
        window.addEventListener('native.keyboardshow', keyboardShowHandler);
        function keyboardShowHandler(e) {
            this.keyboard.show();
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.fcm.getToken()
                .then(function (token) {
                console.log("The token to use is: ", token);
                _this.token = token;
            })
                .catch(function (error) {
                console.error(error);
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) { return console.log("Nuevo token", token); }, function (error) { return console.error(error); });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    alert(JSON.stringify(data));
                }
                else {
                    alert(JSON.stringify(data));
                }
            }, function (error) {
                console.error("Error in notification", error);
            });
        });
    }
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, FCM, SplashScreen, AngularFireAuth])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map