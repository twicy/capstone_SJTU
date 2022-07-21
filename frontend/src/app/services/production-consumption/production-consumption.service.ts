import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionConsumptionService {

  constructor(private httpclicent:HttpClient) { }
  getProduction():Observable<any>{
    return this.httpclicent.get('production');
  }
  getConsumption():Observable<any>{
    return this.httpclicent.get('consumption');
  }
}
