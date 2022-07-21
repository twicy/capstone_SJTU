import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from 'src/app/classes/warning';


@Injectable({
  providedIn: 'root'
})
export class WarninglistService {

  constructor(private httpclient:HttpClient) { }
  
  getWarnings():Observable<any>{
    return this.httpclient.get('api/history?num=50');
  }
  getWarningsLong():Observable<any>{
    return this.httpclient.get('api/history?num=100');
  }

  getNewWarnings():Observable<any>{
    return this.httpclient.get(`warnings/new`);
  }

  putWarnings(_warning:Warning,id:String):Observable<any>{
    return this.httpclient.put('warnings/'+id,{id:_warning.id,label_Chinese:_warning.label_Chinese,time:_warning.time,value:0});
  }
}
