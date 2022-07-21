import { Component,OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductionConsumptionService } from '../../services/production-consumption/production-consumption.service';
import { Consumption } from 'src/app/classes/consumption/consumption';
import { groupbyKeys } from 'src/app/util_func/groupAndSort';



@Component({
  selector: 'app-line-chart-consumption',
  templateUrl: './line-chart-consumption.component.html',
  styleUrls: ['./line-chart-consumption.component.css'],
  providers:[]
})
export class LineChartConsumptionComponent implements OnInit {

  constructor(private _consumptionService:ProductionConsumptionService) {
    Chart.register(...registerables);
   }

  allConsumption:Consumption[]=[];
  consumptionTotalByWeek:any[]=[];
  myChart: any = [];
  

  consumptionTotal:number[]=[];
  consumptionTotalWeekId:number[]=[];

  ngOnInit(): void {
    this._consumptionService.getConsumption().subscribe(
      data=>{
        this.allConsumption=data;
        this.consumptionTotalByWeek=groupbyKeys(this.allConsumption,['week'],'consumption');
        // this.consumptionTotalByWeek=sortByKey(this.consumptionTotalByWeek,'consumption')

        for(let i=0;i<5;i++){
          this.consumptionTotal.push(this.consumptionTotalByWeek[i].consumption);
          this.consumptionTotalWeekId.push(this.consumptionTotalByWeek[i].week.toString())
        }
        // console.log(this.consumptionTotal)
        // console.log(this.consumptionTotalWeekId)

        this.myChart=new Chart("line-chart-2",{
          type:"line",
          data:{
            labels:this.consumptionTotalWeekId,
            datasets: [{
              label: 'Quantity',
              data: this.consumptionTotal,
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
    )

    


    
  }

}
