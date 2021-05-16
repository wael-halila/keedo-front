import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post.service';
import {Post} from '../../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  forum: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.forum = data;
    });

  }
}
