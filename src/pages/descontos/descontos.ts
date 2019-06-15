import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DescontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descontos',
  templateUrl: 'descontos.html',
})
export class DescontosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescontosPage');
  }

  pay(){
    let alert = this.alertCtrl.create({
      title: 'Insígnias insuficientes',
      subTitle: 'Consiga mais insígnias para adquirir este desconto',
      buttons: ['Estudar!']
    });
    alert.present();
  }

}
