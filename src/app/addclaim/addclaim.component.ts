import { Component, OnInit } from '@angular/core';
import {ClaimService} from '../claim.service';
import {Router} from '@angular/router';
import {Claim} from '../claim';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {

  claim: Claim = new Claim();
  submitted = false;
  form: FormGroup;
  Data: any = [
    { name: '0', value: '0' },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' }
  ];
  constructor(private claimservice: ClaimService,
              private router: Router,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    });
  }


  ngOnInit(){}
  newClaim(): void {
    this.submitted = false;
    this.claim = new Claim();
  }
  save(){
    this.claimservice.addClaim(this.claim).subscribe(data => {
        console.log(data);
        console.log(this.form.value);
        this.claim = new Claim();
        this.gotoList();
      } ,
      error  => console.log(error));
    console.log(this.claim);
  }

  onSubmit() {
    this.submitted = true;
    this.save();

  }
  gotoList() {
    this.router.navigate(['claim']);
  }


}
