import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/claim.service';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {


  claim:Claim = new Claim();
  claims:Claim[] = [];

  save(){
    const observable = this.claimService.createclaims(this.claim);
    observable.subscribe(
      (response:any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong")
      }
    )
  }



  approval(index) {
    const observable = this.claimService.approval(index);
    observable.subscribe((response: any) => {
      console.log(response);
      this.claims.splice(index, 1);
    })
  }

  reject(index) {
    const observable = this.claimService.reject(index);
    observable.subscribe((response: any) => {
      console.log(response);
      this.claims.splice(index, 1);
    })
  }

    constructor(public claimService: ClaimService) { }

    ngOnInit(): void {
      const promise = this.claimService.getClaims();
      promise.subscribe((response) => {
        console.log(response);
        this.claims = response as Claim[];
      })
    }

  }
