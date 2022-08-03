import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { WarninglistService } from 'src/app/services/warnings/warninglist.service';
import { Warning } from 'src/app/classes/warning';
import { countbyKeys,sortByKey,getDayOfWeek } from 'src/app/util_func/groupAndSort';



@Component({
  selector: 'app-multi-line-chart-warning',
  templateUrl: './multi-line-chart-warning.component.html',
  styleUrls: ['./multi-line-chart-warning.component.css']
})
export class MultiLineChartWarningComponent implements OnInit {

  constructor(private _warningService:WarninglistService) { 
    Chart.register(...registerables);
  }

  allWarnings:Warning[]=[];
  warningTotalByDay:any[]=[];
  warningByDay1:any[]=[];
  warningByDay2:any[]=[];
  warningByDay3:any[]=[];
  myChart:any=[];



  ngOnInit(): void {
    this._warningService.getWarningsLong().subscribe(
      data=>{
        this.allWarnings=data.map((d)=>{
          
          d.dayOfWeek=getDayOfWeek(d.time.substring(0,10))
          console.log(d.time.substring(0,10),d.dayOfWeek)
          return d
        });
        this.warningTotalByDay=[
          this.allWarnings.filter((item)=>item.dayOfWeek=='Monday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Tuesday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Wednesday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Thursday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Friday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Saturday').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Sunday').length
        ]
        this.warningByDay1=[
          this.allWarnings.filter((item)=>item.dayOfWeek=='Monday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Tuesday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Wednesday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Thursday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Friday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Saturday' && item.machine_obj_English==='xx_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Sunday' && item.machine_obj_English==='xx_main_machine').length
        ]
        this.warningByDay2=[
          this.allWarnings.filter((item)=>item.dayOfWeek=='Monday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Tuesday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Wednesday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Thursday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Friday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Saturday' && item.machine_obj_English==='cb_main_maCHine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Sunday' && item.machine_obj_English==='cb_main_maCHine').length
        ]
        this.warningByDay3=[
          this.allWarnings.filter((item)=>item.dayOfWeek=='Monday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Tuesday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Wednesday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Thursday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Friday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Saturday' && item.machine_obj_English==='cs_main_machine').length,
          this.allWarnings.filter((item)=>item.dayOfWeek=='Sunday' && item.machine_obj_English==='cs_main_machine').length
        ]
        
        
        
        
        this.myChart=new Chart("line-chart-warning",{
          type:"bar",
          data:{
            labels:['Mon.','Tues.','Wed.','Thur.','Fri.','Sat.','Sun.'],
            datasets:[
            //   {
            //   label:'All',
            //   data:this.warningTotalByDay,
            //   backgroundColor: 'rgba(235,115,23, 0.7)',
            //   borderColor: 'rgb(255, 99, 132)',
            //   borderWidth:1
            // },
            {
              label:'main',
              data:this.warningByDay1,
              backgroundColor: 'rgba(66,185, 245,0.7)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth:1
            },{
              label:'sub',
              data:this.warningByDay2,
              backgroundColor: 'rgba(235, 190,68,0.7)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth:1
            },{
              label:'packaging',
              data:this.warningByDay3,
              backgroundColor: 'rgba(80,235,144,0.7)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth:1
            }]
          },
          options:{
            plugins:{
              title:{
                display:true,
                text:'Warning Count by Week Day'
              }
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        })
  
      }
    )
  }

}
