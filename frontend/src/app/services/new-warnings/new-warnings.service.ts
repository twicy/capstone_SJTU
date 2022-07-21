import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from 'src/app/classes/warning';

@Injectable({
  providedIn: 'root'
})
export class NewWarningsService {

  constructor(private httpclient:HttpClient) { }
  getNewWarnings():Observable<any>{
    return this.httpclient.get(`warnings/new`);
  }
}
