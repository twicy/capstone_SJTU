import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Warning } from 'src/app/classes/warning';
import { WarninglistService } from 'src/app/services/warnings/warninglist.service';

// import {Chart} from 'node_modules/chart.js'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  
  providers:[WarninglistService]
})
export class PiechartComponent implements OnInit {

  constructor(private _warningListService:WarninglistService) { }
  lstAllWarnings:Warning[]=[];
  lstHiddenWarnings:Warning[]=[];
  lstDisplayedWarnings:Warning[]=[];

  ngOnInit(): void {
    this._warningListService.getWarnings()
    .subscribe(
      data=>{
        this.lstAllWarnings=data;
        this.lstHiddenWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.value===0));
        this.lstDisplayedWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.value===1));
        console.log(this.lstAllWarnings)
        const myChart = new Chart("pie-chart", {
          type: 'pie',
          data: {
              labels: ['Resolved', 'Not Resolved'],
              datasets: [{
                  label: '# of Warnings',
                  data: [this.lstDisplayedWarnings.length,this.lstHiddenWarnings.length],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',  
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          
      });
      }
    )
   

// const ctx = document.getElementById('pie-chart');
    

  }
  
  
  
}
