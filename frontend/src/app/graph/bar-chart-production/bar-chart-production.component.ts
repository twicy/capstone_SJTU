import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-production',
  templateUrl: './bar-chart-production.component.html',
  styleUrls: ['./bar-chart-production.component.css']
})
export class BarChartProductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true,
    
  };
  barChartLabels: BaseChartDirective["labels"] = ['#33', '#5', '#8', '#14', '#20', '#15'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataset[] = [
    { 
      
      data: [40,35,32,31,25,24], 
      label: 'Quantity' ,
      "backgroundColor": "rgb(153,217,72)",
      "pointBackgroundColor": "rgba(229, 229, 229, 1)",
      "pointHoverBackgroundColor": "rgba(151,187,205,1)",
      "borderColor": "rgba(0,0,0,0)",
      "pointBorderColor": "#fff",
      "pointHoverBorderColor": "rgba(151,187,205,1)"
    }
  ];

}
