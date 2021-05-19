import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import {Kindergarten} from './kindergarten';
@Injectable({
  providedIn: 'root'
})
export class KindergartenService {
  private baseKUrl = 'http://localhost:8085/Claim/getAllkinders';
  private bUrl = 'http://localhost:8085/Claim/blocksubscription';
  private ubUrl = 'http://localhost:8085/Claim/unblocksubscription';
  constructor(private http: HttpClient) {
  }

  getAllkinders(): Observable<Kindergarten[]> {
    return this.http.get<Kindergarten[]>(this.baseKUrl);

  }

  blockSubscription(name: any): Observable<any> {
    return this.http.post(`${this.bUrl}/${name}`, {responseType: 'text'});
  }
  unblocksubscription(name: any): Observable<any> {
    return this.http.post(`${this.ubUrl}/${name}`, {responseType: 'text'});
  }
}
