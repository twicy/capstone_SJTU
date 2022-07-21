import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ProductionConsumptionService } from '../../services/production-consumption/production-consumption.service';
import { Production } from '../../classes/production/production';
import { groupbyKeys,sortByKey } from 'src/app/util_func/groupAndSort';


@Component({
  selector: 'app-bar-chart-production',
  templateUrl: './bar-chart-production.component.html',
  styleUrls: ['./bar-chart-production.component.css']
})
export class BarChartProductionComponent implements OnInit {

  constructor(private _productionService:ProductionConsumptionService) { 
    Chart.register(...registerables);
  }

  allProductions:Production[]=[];
  productTotalByType:any[]=[];
  myChart:any=[];

  top7productTotal:number[]=[];
  top7productTotalId:number[]=[];
  
  

  ngOnInit(): void {
    this._productionService.getProduction().subscribe(
      data=>{
        this.allProductions=data;
        this.productTotalByType=groupbyKeys(this.allProductions, ['production_id'],'production');
        // this.productTotalByWeek=groupbyKeys(this.allProductions,['week'],'production');
        this.productTotalByType=sortByKey(this.productTotalByType,'production');
        // this.productTotalByWeek=sortByKey(this.productTotalByWeek,'production');
        // console.log(this.productTotalByType)
        
        for(let i=0;i<7;i++){
          this.top7productTotal.push(this.productTotalByType[i].production);
          this.top7productTotalId.push(this.productTotalByType[i].production_id.toString())
        }
        // console.log(this.top7productTotalId)
        // console.log(this.top7productTotal)

        this.myChart=new Chart("bar-chart-prod",{
          type:"bar",
          data:{
            labels:this.top7productTotalId,
            datasets:[{
              label:'Quantity',
              data:this.top7productTotal,
              backgroundColor: [
                'rgba(45,97,41, 0.5)',
                'rgba(69,131,65, 0.5)',
                'rgba(124,176,101, 0.5)',
                'rgba(110,179,93, 0.5)',
                'rgba(94,179,105, 0.5)',
                'rgba(130,208,125, 0.5)',
                'rgba(199,235,151, 0.5)'
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
              borderWidth:1
            }]
          },
          options:{
            plugins:{
              title:{
                display:true,
                text:'Top 7 components with most production'
              }
            }
          }
        })

      }
    )
  }

  

  
  

  
  

  

}
