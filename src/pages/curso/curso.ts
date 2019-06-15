import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage implements OnInit {
  curso: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.curso)
  }

  ngOnInit(){
    this.curso = this.navParams.get('curso');
  }
}
