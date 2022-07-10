import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";



@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }
  
  // interactivePlotSubject$: Subject<any> = new BehaviorSubject<any>(this.graph2.data);

  // hover(event: any): void {
  //   this.interactivePlotSubject$.next([this.graph2.data[event.points[0].pointIndex]]);
  // }

  // mouseLeave(event:any): void {
  //   this.interactivePlotSubject$.next(this.graph2.data);
  // }
}
