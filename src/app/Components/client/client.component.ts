import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/entity/Claim';
import { ClaimService } from 'src/app/claim.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  
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

  deletebyid(index){
    const observable = this.claimService.deletebyid(index);
    observable.subscribe((response: any)=>{
      console.log(response);
      this.claims.splice(index, 1);
    }) 

  }
  deleteAll(){
    const observable = this.claimService.deleteAll();
    observable.subscribe((response: any)=>{
      console.log(response);
    }) 

  }
  

  
  
  constructor(public claimService:ClaimService) { }

  ngOnInit(): void {
    const promise = this.claimService.getClaims();
    promise.subscribe((response)=>{
      console.log(response);
      this.claims = response as Claim[];
    })
  }

     
}


// update(id:number){
  //   const observable = this.studentService.updateStudent(id , student);
  //   observable.subscribe(
  //     (response:any) => {
  //       console.log(response);
  //     },
  //     function(error){
  //       console.log(error);
  //       alert("Something went wrong")
  //     }
  //   )
  // }