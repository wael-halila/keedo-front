import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommentService} from "../comment.service";
import {Post} from "../post";
import {Pcomment} from "../pcomment";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  pcomment: Pcomment = new Pcomment ();
  submitted = false;
  noth!: Pcomment[];
  form !: FormGroup;
  constructor(private comms: CommentService,private router: Router) { }

  ngOnInit(): void {
  }
  addcomment(id:number) {
    this.comms.addcomment(id).subscribe((mot: Pcomment[]) => {
      console.log(mot);
      this.noth = mot;
    });
  }
  save() {
    this.comms.addcomment(1).subscribe(data => {
        console.log(data);
        console.log(this.form.value)
        this.gotoList();
      },
      error => console.log(error));
    console.log(this.noth);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/posts']);
  }
}
