import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EstGiosPage } from '../pages/est-gios/est-gios';
import { ContatosPage } from '../pages/contatos/contatos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CarteirinhaPage } from '../pages/carteirinha/carteirinha';
import { RematriculaPage } from '../pages/rematricula/rematricula';
import { BolsasDeEstudoPage } from '../pages/bolsas-de-estudo/bolsas-de-estudo';
import { BoletimPage } from '../pages/boletim/boletim';
import { MTeriasPage } from '../pages/m-terias/m-terias';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EstGiosPage,
    ContatosPage,
    TabsControllerPage,
    CarteirinhaPage,
    RematriculaPage,
    BolsasDeEstudoPage,
    BoletimPage,
    MTeriasPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EstGiosPage,
    ContatosPage,
    TabsControllerPage,
    CarteirinhaPage,
    RematriculaPage,
    BolsasDeEstudoPage,
    BoletimPage,
    MTeriasPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}