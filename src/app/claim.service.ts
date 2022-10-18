import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Claim from './entity/Claim';


const Post_URL="http://localhost:8060/api/v1/claim/createclaim"
const Delete_URL= "http://localhost:8086/api/v1/claim/deleteClaims/"

const Patch_URL= "http://localhost:8060/api/v1/claim/approval/"

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  
 
  fetchMembers(){
    return this.http.get("http://localhost:8060/api/v1/claim/fetchMembers")
  }
  fetchAdmins(){
    return this.http.get("http://localhost:8060/api/v1/claim/fetchAdmins")
  }
  fetchPhysicians(){
    return this.http.get("http://localhost:8060/api/v1/claim/fetchPhysicians")
  }

    getClaims(){
      return this.http.get("http://localhost:8060/api/v1/claim/allClaims")
    }
  createclaims(claims:{
  id: number;
  claimType: string;
  claimAmount: string;
  claimDate: string;
  remark: string;
  status: string;
  })
  {
    return this.http.post(Post_URL,Claim);
  }
  
  deletebyid( id:number){
   return this.http.delete( Delete_URL + id);
  }

  approval(id:number){
    return this.http.patch(Patch_URL,id);
   }

   reject(id:number){
    return this.http.patch(Patch_URL,id);
   }

  


  // deleteAll(){
  //   return this.http.delete( Delete_URL);
  // }
  
  
    
    constructor(public http :HttpClient) { }
  }


