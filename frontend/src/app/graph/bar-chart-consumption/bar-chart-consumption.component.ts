import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-consumption',
  templateUrl: './bar-chart-consumption.component.html',
  styleUrls: ['./bar-chart-consumption.component.css']
})
export class BarChartConsumptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: BaseChartDirective["labels"] = ['#33', '#7', '#6', '#12', '#15', '#20'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataset[] = [
    { 
      data: [39,25,23,20,19,19], 
      label: 'Quantity' ,
      "backgroundColor": "rgb(0,204,204)",
      "pointBackgroundColor": "rgba(229, 229, 229, 1)",
      "pointHoverBackgroundColor": "rgba(151,187,205,1)",
      "borderColor": "rgba(0,0,0,0)",
      "pointBorderColor": "#fff",
      "pointHoverBorderColor": "rgba(151,187,205,1)"
    }
  ];
}
