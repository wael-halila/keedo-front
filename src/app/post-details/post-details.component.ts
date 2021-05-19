import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import {Post} from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  post: Post = new Post();
  submitted = false;
  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }
  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }
  save() {
    this.postService
      .createPost(this.post).subscribe(data => {
        console.log(data)
        this.post = new Post();
        this.gotoList();
      },
      error => console.log(error));
    console.log(this.post);
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/posts']);
  }
}
