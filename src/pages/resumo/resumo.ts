import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html'
})
export class ResumoPage {

  constructor(public navCtrl: NavController) {

  }

  public polarAreaChartLabels: string[] = ['Linguagens', 'Matemática', 'C. da Natureza', 'C. Humanas'];
  public polarAreaChartData: number[] = [85, 95, 75, 55];
  public polarAreaLegend = true;

  public polarAreaChartType: string = 'polarArea';
  public chartHovered(e: any): void {
    console.log(e);
  }

 
  public barChartLabels: string[] = ['Periodo 1', 'Periodo 2', 'Periodo 3', 'Periodo 4'];
  public barChartType: string = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: any[] = [
    { 
      data: [65, 59, 80, 81], 
      label: 'Notas'
    }
  ];
}
