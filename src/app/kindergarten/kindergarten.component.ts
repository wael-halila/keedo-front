import { Component, OnInit } from '@angular/core';
import {Kindergarten} from '../kindergarten';
import {KindergartenService} from '../kindergarten.service';
import {Claim} from '../claim';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.css']
})
export class KindergartenComponent implements OnInit {
  submitted = false;
  kd: Kindergarten = new Kindergarten();
  form!: FormGroup;
  kinder!: Kindergarten[];
  constructor(private kinderservice: KindergartenService, private router: Router) { }

  ngOnInit(): void {
    this.getAllkinders();
  }
  getAllkinders(){
    this.kinderservice.getAllkinders().subscribe((data: Kindergarten[]) => {
      console.log(data);
      this.kinder = data;
    });
  }

  blockSubscription(name: string) {
    this.kinderservice.blockSubscription(name).subscribe((data: Kindergarten[]) => {
      console.log(data);
      this.kinder = data;
    });
  }
  unblocksubscription(name: string) {
    this.kinderservice.unblocksubscription(name).subscribe((data: Kindergarten[]) => {
      console.log(data);
      this.kinder = data;
    });
  }
  save1(){
    this.kinderservice.unblocksubscription(name).subscribe(data => {
        console.log(data);
        console.log(this.form.value);
        this.gotoList();
      } ,
      error  => console.log(error));
    console.log(this.kinder);
  }
  save(){
    this.kinderservice.blockSubscription(name).subscribe(data => {
        console.log(data);
        console.log(this.form.value);
        this.gotoList();
      } ,
      error  => console.log(error));
    console.log(this.kinder);
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.save1();

  }
  gotoList() {
    this.router.navigate(['kinder']);
  }
}
