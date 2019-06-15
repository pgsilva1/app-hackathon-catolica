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
      "imageUrl": "https://www.uri.edu/programs/wp-content/uploads/programs/sites/3/2014/04/feat_img_comp_sci.jpg",
      "description": "O curso de Ciência da Computação, também chamado de Ciências da Computação, possui muitas disciplinas de Matemática e boa parte da estrutura curricular é composta por disciplinas destinadas ao aprendizado das linguagens de programação mais utilizadas. A faculdade tem duração média de 4 anos, pode ser do tipo bacharelado ou licenciatura e é possível cursar esta graduação nas modalidades presencial e a distância.",
      "profissions": "Desenvolvedor, CTO e Pesquisador",
      "videoUrl": "https://www.youtube.com/watch?v=jWTSM5HDKFk",
    },
    {
      "name": "Administração",
      "collegeName": "Centro Universitário Católica do Tocantins",
      "totalVacancies": 20,
      "imageUrl": "https://admnosangue.files.wordpress.com/2017/11/aprenda-as-habilidades-necessarias-para-os-trabalhos-do-futuro-noticias-e1510748365525.jpg?w=785",
      "description": "O administrador tem a função de gerenciar os recursos de uma empresa/organização/instituição, sejam estes recursos financeiros, materiais ou humanos. Ele deve organizar e otimizar o setor em que trabalha com o objetivo de maximizar o valor ao acionista (dono) da organização.",
      "profissions": "CEO, Administrador de Empresas e Empreendedor",
      "videoUrl": "https://www.youtube.com/watch?v=_mJNU4haeG0",
    },
    {
      "name": "Agronomia",
      "collegeName": "Centro Universitário Católica do Tocantins",
      "totalVacancies": 15,
      "imageUrl": "https://www.tuiuti.edu.br/hubfs/estudar%20agronomia%20na%20utp.jpg",
      "description": "O curso de Agronomia é do tipo bacharelado e dura em média cinco anos. Nos primeiros semestres da graduação, o aluno tem disciplinas mais básicas, como Matemática, Química, Biologia, Informática e Estatística. Depois disso, o estudante passa a obter conhecimentos específicos da profissão, com disciplinas como: Engenharia Rural, Engenharia Florestal, Ciências do Solo e Agricultura.",
      "profissions": "Tecnologia de Produtos Vegetais e Animais, Manejo e Produção Florestal, Política e Desenvolvimento Rural",
      "videoUrl": "https://www.youtube.com/watch?v=2qMhb0WDVyQ"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  seeMore(curso) {
    this.navCtrl.push("CursoPage", { curso: curso })
  }
  
  discounts(curso){
    this.navCtrl.push("DescontosPage")
  }
}
