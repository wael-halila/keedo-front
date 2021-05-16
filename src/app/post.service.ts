import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost:8085/forum/retrieve-all-Subjects';
  baseUrl2 = 'http://localhost:8085/forum/addSubject';

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

}
