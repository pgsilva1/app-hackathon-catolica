import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  cursos = [
    {
      "name": "Ciência da Computação",
      "collegeName": "Centro Universitário Católica do Tocantins",
      "totalVacancies": 10,
      "imageUrl": "https://www.uri.edu/programs/wp-content/uploads/programs/sites/3/2014/04/feat_img_comp_sci.jpg"
    },
    {
      "name": "Administração",
      "collegeName": "Centro Universitário Católica do Tocantins",
      "totalVacancies": 20,
      "imageUrl": "https://admnosangue.files.wordpress.com/2017/11/aprenda-as-habilidades-necessarias-para-os-trabalhos-do-futuro-noticias-e1510748365525.jpg?w=785"
    },
    {
      "name": "Agronomia",
      "collegeName": "Centro Universitário Católica do Tocantins",
      "totalVacancies": 15,
      "imageUrl": "https://www.tuiuti.edu.br/hubfs/estudar%20agronomia%20na%20utp.jpg"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
