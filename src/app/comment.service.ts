import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pcomment} from "./pcomment";
import {Subject} from "./subject";
import {$$} from "@angular/compiler/src/chars";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'http://localhost:8085/forum/getAllComments';
  bUrl = 'http://localhost:8085/forum/addComment'
  constructor(private http: HttpClient) {
  }

  getComments(): Observable<Pcomment[]> {
    return this.http.get<Pcomment[]>(this.baseUrl);
  }
  addcomment(subjectId:number): Observable<any> {
    return this.http.post(`${this.bUrl}/${subjectId}`, { responseType: 'text' });



      //${this.bUrl}/${id}, {responseType: 'text'});
  }
}
