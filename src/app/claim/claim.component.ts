import { Component, OnInit } from '@angular/core';
import {ClaimService} from '../claim.service';
import {Claim} from '../claim';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  rec!: Observable<Claim[]>;
  claims!: Claim[];
  category!: string;

  claimm: Claim = new Claim();
  submitted = false;

  constructor(private claimservice: ClaimService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  getAllClaims() {
    this.claimservice.getAllClaims().subscribe((data: Claim[]) => {
      console.log(data);
      this.claims = data;
    });
  }

  getRecentClaim() {
    this.claimservice.getRecentClaim().subscribe((data: Claim[]) => {
      console.log(data);
      this.claims = data;
    });
  }

  reloadData() {
    this.rec = this.claimservice.getAllClaims();
    this.getAllClaims();
  }

  deleteClaimById(id: number) {
    this.claimservice.deleteClaimById(id).subscribe((data: Claim[]) => {
      console.log(data);
      this.claims = data;
      this.reloadData();
    });
  }
  Search() {
    if (this.category !== '' ){
      this.claims = this.claims.filter(res => {
        return res.category.toLowerCase().match(this.category.toLowerCase());
      });
    }else if (this.category === '') {
      this.ngOnInit();
    }
  }


}

