import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apply } from '../models/apply';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  apiUrl:string=environment.apiUrl;
  http=inject(HttpClient);

  getApply():Observable<apply>{
    return this.http.get(url:`${this.apiUrl}/apply`);
  }

}
