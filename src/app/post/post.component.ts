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
    this.reloadData();

  }

  reloadData() {
    this.post = this.postService.getpostsList();
    this.getPosts();
  }
  deletePost(id: number ) {
    this.postService.deletePost(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }
  getPosts(){
    this.postService.getPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.posts = data;
    });

  }
  deletePostRef(){
    this.postService.deletePostref()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  Search() {
    if (this.typee !== '' ){
      this.posts = this.posts.filter(res => {
        return res.type.toLowerCase().match(this.typee.toLowerCase());
      });
    }else if (this.typee === '') {
      this.ngOnInit();
    }
  }

}


