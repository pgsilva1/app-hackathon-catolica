import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-insignias',
  templateUrl: 'insignias.html'
})
export class InsigniasPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  see(){
    let alert = this.alertCtrl.create({
      title: 'Insígnia',
      subTitle: 'Esta insígnia significa uma conquista sua! Parabéns!',
      buttons: ['Ok']
    });
    alert.present();
  }
}
