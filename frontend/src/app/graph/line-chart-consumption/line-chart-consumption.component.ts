import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart-consumption',
  templateUrl: './line-chart-consumption.component.html',
  styleUrls: ['./line-chart-consumption.component.css'],
  providers:[]
})
export class LineChartConsumptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const myChart=new Chart("line-chart-2",{
      type:"line",
      data:{
        labels:['1','2','3','4','5'],
        datasets: [{
          label: 'Quantity',
          data: [459,565, 490, 453, 406, 355,490],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Consumption'
            }
        }
      }
      
    })
  }

}
