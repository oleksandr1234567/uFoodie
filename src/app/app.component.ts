// Kristofer McCormick 1803203 & Oleksandr Zakirov 1802341
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
// Here is the routing for the tabs!
  public appPage = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'ios-home'
    },
    {
      title: 'My recipes',
      url: '/tabs/tab2',
      icon: 'ios-pizza'
    },
    {
      title: 'Images',
      url: '/tabs/tab3',
      icon: 'ios-camera'
    },
    {
      title: 'Timer',
      url: '/tabs/tab4',
      icon: 'ios-timer'
    },
    {
      title: 'Our favourites',
      url: '/tabs/tab5',
      icon: 'ios-heart'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    });
  }

}
