import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart-production',
  templateUrl: './line-chart-production.component.html',
  styleUrls: ['./line-chart-production.component.css']
})
export class LineChartProductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart=new Chart("line-chart",{
      type:"line",
      data:{
        labels:['1','2','3','4','5'],
        datasets: [{
          label: 'Quantity',
          data: [459, 370, 411, 500, 436, 455, 410],
          fill: false,
          borderColor: "rgb(153,217,72)",
          tension: 0.1
        }]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'Total Production'
            }
        }
      }
      
    })
  }

}
