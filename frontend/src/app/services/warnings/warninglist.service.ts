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
    return this.httpclient.get('http://localhost:5000/warnings');
  }

  putWarnings(_warning:Warning,id:String):Observable<any>{
    return this.httpclient.put('http://localhost:5000/warnings/'+id,{id:_warning.id,label_Chinese:_warning.label_Chinese,time:_warning.time,value:(_warning.value+1)%2});
  }
}
