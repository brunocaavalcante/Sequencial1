import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EstGiosPage } from '../est-gios/est-gios';
import { ContatosPage } from '../contatos/contatos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = EstGiosPage;
  tab3Root: any = ContatosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
