import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductionConsumptionService } from '../../services/production-consumption/production-consumption.service';
import { groupbyKeys} from 'src/app/util_func/groupAndSort';
import { Production } from '../../classes/production/production';

@Component({
  selector: 'app-line-chart-production',
  templateUrl: './line-chart-production.component.html',
  styleUrls: ['./line-chart-production.component.css']
})
export class LineChartProductionComponent implements OnInit {

  constructor(private _productionService:ProductionConsumptionService) { 
    Chart.register(...registerables);
  }

  allProduction:Production[]=[];
  productionTotalByWeek:any[]=[];
  myChart: any = [];
  

  productionTotal:number[]=[];
  productionTotalWeekId:number[]=[];

  ngOnInit(): void {
    this._productionService.getProduction().subscribe(
      data=>{
        this.allProduction=data;
        this.productionTotalByWeek=groupbyKeys(this.allProduction,['week'],'production');
        // this.consumptionTotalByWeek=sortByKey(this.consumptionTotalByWeek,'consumption')

        for(let i=0;i<5;i++){
          this.productionTotal.push(this.productionTotalByWeek[i].production);
          this.productionTotalWeekId.push(this.productionTotalByWeek[i].week.toString())
        }
        // console.log(this.consumptionTotal)
        // console.log(this.consumptionTotalWeekId)

        this.myChart=new Chart("line-chart-prod",{
          type:"line",
          data:{
            labels:this.productionTotalWeekId,
            datasets: [{
              label: 'Quantity',
              data: this.productionTotal,
              fill: false,
              borderColor: 'rgb(58,208,173)',
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
    )

    


    
  }

}