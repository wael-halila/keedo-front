import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Claim} from './claim';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  get id(): number {
    return this.id;
  }

  set id(value: number) {
    this.id = value;
  }
  private baseUrl = 'http://localhost:8085/Claim/getAllClaims';
  private delurl = 'http://localhost:8085/Claim/deleteClaimById';
  private addurl = 'http://localhost:8085/Claim/addClaim';
  private url = 'http://localhost:8085/Claim/getClaimById';
  private recUrl = 'http://localhost:8085/Claim/getRecentClaim';
  private fUrl = 'http://localhost:8085/Claim/retrieve-Claims-ByCategory';
  constructor(private http: HttpClient) {
  }

  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.baseUrl);

  }
  getRecentClaim(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.recUrl)
      ;

  }

  deleteClaimById(id: number): Observable<any> {
    return this.http.delete(`${this.delurl}/${id}`, {responseType: 'text'});
  }
  getClaimById(id: number){
    return this.http.get<Claim>(`${this.delurl}/${id}`);
  }
  addClaim(claim: Claim) {
    return this.http.post <Claim>(this.addurl, claim);
  }
}
