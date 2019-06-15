import { Component }           from '@angular/core';
import { ChartType }           from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
    selector   : 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls  : ['tab1.page.scss']
})
export class Tab1Page {

    public doughnutChartLabels: Label[]    = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
    ];
    public doughnutChartType: ChartType    = 'doughnut';

    constructor() {
    }

}
