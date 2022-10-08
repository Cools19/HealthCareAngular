import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Claim from './entity/Claim';


const Post_URL="http://localhost:8084/claimService"
const Delete_URL= "http://localhost:8084/deleteClaims/"
@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  
 

    getClaims(){
      return this.http.get("http://localhost:8084/allClaims")
    }
  createclaims(claims:{
  id: number;
  claimType: string;
  claimAmount: string;
  claimDate: string;
  remark: string;
  
  })
 
  
  
  {
    return this.http.post(Post_URL,Claim);
  }
  
  deletebyid( id:number){
   return this.http.delete( Delete_URL + id);
  }
  deleteAll(){
    return this.http.delete( Delete_URL);
  }
  
  
    
    constructor(public http :HttpClient) { }
  }


