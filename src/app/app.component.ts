import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CarteirinhaPage } from '../pages/carteirinha/carteirinha';
import { RematriculaPage } from '../pages/rematricula/rematricula';
import { BolsasDeEstudoPage } from '../pages/bolsas-de-estudo/bolsas-de-estudo';
import { BoletimPage } from '../pages/boletim/boletim';
import { MTeriasPage } from '../pages/m-terias/m-terias';



import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCarteirinha(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CarteirinhaPage);
  }goToRematricula(params){
    if(!params) params = {};
    this.navCtrl.setRoot(RematriculaPage);
  }goToBolsasDeEstudo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BolsasDeEstudoPage);
  }goToBoletim(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BoletimPage);
  }goToMTerias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MTeriasPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }
}
