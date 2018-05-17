import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  public pessoa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa = navParams.get("pessoa")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
    console.log(this.pessoa)
  }




}
