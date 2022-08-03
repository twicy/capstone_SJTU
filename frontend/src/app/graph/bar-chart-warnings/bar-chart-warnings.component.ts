import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { WarninglistService } from 'src/app/services/warnings/warninglist.service';
import { Warning } from 'src/app/classes/warning';
import { countbyKeys,sortByKey } from 'src/app/util_func/groupAndSort';

@Component({
  selector: 'app-bar-chart-warnings',
  templateUrl: './bar-chart-warnings.component.html',
  styleUrls: ['./bar-chart-warnings.component.css']
})
export class BarChartWarningsComponent implements OnInit {

  constructor(private _warningService:WarninglistService) { 
    Chart.register(...registerables);
  }

  allWarnings:Warning[]=[];
  warningTotalByType:any[]=[];
  myChart:any=[];

  top5warningTotal:number[]=[];
  top5warningTotalName:number[]=[];

  ngOnInit(): void {
    this._warningService.getWarningsLong().subscribe(
      data=>{
        this.allWarnings=data;
        this.warningTotalByType=countbyKeys(this.allWarnings,['label_Chinese'],'ct')
        this.warningTotalByType=sortByKey(this.warningTotalByType,'ct');
        console.log(this.warningTotalByType)
        for(let i=0;i<5;i++){
          this.top5warningTotalName.push(this.warningTotalByType[i].label_Chinese)
          this.top5warningTotal.push(this.warningTotalByType[i].ct)
        }
        console.log(this.top5warningTotal)
        console.log(this.top5warningTotalName)

        this.myChart=new Chart("bar-chart-warning",{
          type:"bar",
          data:{
            labels:this.top5warningTotalName,
            datasets:[{
              label:'Count',
              data:this.top5warningTotal,
              backgroundColor: [
                'rgba(235,115,23, 0.7)',
                'rgba(236,126,42, 0.7)',
                'rgba(236,166,46, 0.7)',
                'rgba(245,179,65, 0.7)',
                'rgba(252,201,62, 0.7)',
                
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                'rgb(255, 159, 64)',
                
              ],
              borderWidth:1
            }]
          },
          options:{
            plugins:{
              title:{
                display:true,
                text:'Top 5 warnings that occur most'
              }
            }
          }
        })
  
      }
    )
  }
}
