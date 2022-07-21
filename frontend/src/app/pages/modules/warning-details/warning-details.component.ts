import { Component, OnInit } from '@angular/core';
import { NewWarningsService } from 'src/app/services/new-warnings/new-warnings.service';
import { Warning } from 'src/app/classes/warning';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css']
})
export class WarningDetailsComponent implements OnInit {

  constructor(private _newWarningsService: NewWarningsService, private activeroute: ActivatedRoute) { }
  
  private timer: any;
  id: any = null;
  isNormal: boolean = true;
  warningData!: Warning;

  fetchNewWarnings(): void {
    this._newWarningsService.getNewWarnings().subscribe(
      data => {
        console.log("fetch new warnings");
        if (data === null) {
          this.isNormal = true;
        }
        else {
          this.isNormal = false;
          this.warningData = data[0];
        }
      }
    ) 
  }
  
  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.fetchNewWarnings();
    }, 2000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  stopGenerate(){
    clearInterval(this.timer);
  }
  startGenerate(){
    this.timer = setInterval(() => {
      this.fetchNewWarnings();
    }, 2000)
  }

}