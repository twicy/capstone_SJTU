import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-warnings',
  templateUrl: './bar-chart-warnings.component.html',
  styleUrls: ['./bar-chart-warnings.component.css']
})
export class BarChartWarningsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true,
    
  };
  barChartLabels: BaseChartDirective["labels"] = ['#28', '#10', '#1', '#4', '#35', '#19'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataset[] = [
    { 
      data: [175,153,133,110,81,53], 
      label: 'Occurance' ,
      "backgroundColor": "rgba(255, 10, 132, 0.8)",
      "pointBackgroundColor": "rgba(229, 229, 229, 1)",
      "pointHoverBackgroundColor": "rgba(151,187,205,1)",
      "borderColor": "rgba(0,0,0,0)",
      "pointBorderColor": "#fff",
      "pointHoverBorderColor": "rgba(151,187,205,1)"
    }
  ];
}
