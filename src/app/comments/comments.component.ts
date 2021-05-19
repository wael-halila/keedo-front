import { Component, OnInit } from '@angular/core';
import {Pcomment} from "../pcomment";
import { Observable } from 'rxjs';
import {CommentService} from "../comment.service";
import {Post} from "../post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commenttt: Pcomment = new Pcomment();
  comment!: Observable<Pcomment[]>;
  comments!: Pcomment[];

  submitted = false;

  constructor(private comms: CommentService,  private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }
  addcomment(id:any) {
    this.comms.addcomment(id).subscribe((data: Pcomment[]) => {
      console.log(data);
      this.comments = data;
    });
  }
  reloadData() {
    this.comment = this.comms.getComments();
    this.getComments();
  }

  getComments() {
    this.comms.getComments().subscribe((data: Pcomment[]) => {
      console.log(data);
      this.comments = data;
    });
  }
  save() {
    this.comms.addcomment(this.commenttt.id).subscribe(data => {
        console.log(data)
        this.commenttt = new Pcomment();
        this.gotoList();
      },
      error => console.log(error));
    console.log(this.commenttt);
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/']);
  }
}
