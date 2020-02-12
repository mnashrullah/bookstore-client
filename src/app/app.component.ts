import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any;
  loader: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth: AuthService,
    public loadingCtrl: LoadingController,
    public router: Router
  ) {
    this.initializeApp();
    // this.presentLoading();
    // this.auth.login().then((isLoggedIn) => {
    //   if (isLoggedIn) {
    //     this.router.navigate(['/tabs/tab1']);
    //   } else {
    //     this.router.navigate(['/login']);
    //   }
    //   this.loader.dismiss();
    // });
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      message: "Authenticated...",
    });
    this.loader.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
