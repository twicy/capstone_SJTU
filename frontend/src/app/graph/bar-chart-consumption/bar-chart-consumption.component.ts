import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ProductionConsumptionService } from '../../services/production-consumption/production-consumption.service';
import { Consumption } from 'src/app/classes/consumption/consumption';
import { groupbyKeys,sortByKey } from 'src/app/util_func/groupAndSort';

@Component({
  selector: 'app-bar-chart-consumption',
  templateUrl: './bar-chart-consumption.component.html',
  styleUrls: ['./bar-chart-consumption.component.css']
})
export class BarChartConsumptionComponent implements OnInit {

  constructor(private _consumptionService:ProductionConsumptionService) { 
    Chart.register(...registerables);
  }

  allConsumptions:Consumption[]=[];
  productTotalByType:any[]=[];
  myChart:any=[];

  top7consumptionTotal:number[]=[];
  top7consumptionTotalId:number[]=[];

  ngOnInit(): void {
    this._consumptionService.getConsumption().subscribe(
      data=>{
        this.allConsumptions=data;
        this.productTotalByType=groupbyKeys(this.allConsumptions, ['consumption_id'],'consumption');
        this.productTotalByType=sortByKey(this.productTotalByType,'consumption');
        console.log(this.productTotalByType)
        
        for(let i=0;i<7;i++){
          this.top7consumptionTotal.push(this.productTotalByType[i].consumption);
          this.top7consumptionTotalId.push(this.productTotalByType[i].consumption_id.toString())
        }
        console.log(this.top7consumptionTotalId)
        console.log(this.top7consumptionTotal)

        this.myChart=new Chart("bar-chart-cons",{
          type:"bar",
          data:{
            labels:this.top7consumptionTotalId,
            datasets:[{
              label:'Quantity',
              data:this.top7consumptionTotal,
              backgroundColor: [
                'rgba(70,131,201, 0.7)',
                'rgba(56,135,175, 0.7)',
                'rgba(75,165,209, 0.7)',
                'rgba(77,176,206, 0.7)',
                'rgba(109,200,228, 0.7)',
                'rgba(105,208,223, 0.7)',
                'rgba(105,223,223, 0.7)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(223,228,94)',
                'rgb(201, 203, 207)'
              ],
              borderWidth:0.5
            }]
          },
          options:{
            plugins:{
              title:{
                display:true,
                text:'Top 7 components with most consumption'
              }
            }
          }
        })

      }
    )

  }

}
  