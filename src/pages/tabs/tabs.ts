import { Component } from '@angular/core';

import { ResumoPage } from '../resumo/resumo';
import { InsigniasPage } from '../insignias/insignias';
import { CursosPage } from '../cursos/cursos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ResumoPage;
  tab2Root = InsigniasPage;
  tab3Root = CursosPage;

  constructor() {

  }
}
