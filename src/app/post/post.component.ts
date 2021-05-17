import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: Observable<Post[]>;
  posts!: Post[];
  typee!: string;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {


}}


