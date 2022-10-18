import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const Post_URL="http://localhost:8060/api/v1/member/member"
const Delete_URL= "http://localhost:8060/api/v1/member/deleteMember/"


@Injectable({
  providedIn: 'root'
})
export class MemberService {
 

  getMembers(){
    return this.http.get("http://localhost:8060/api/v1/member/allMemberService")
  }
  getAdmins(){
    return this.http.get("http://localhost:8060/api/v1/member/allAdmins")
  }
  getPhysicians(){
    return this.http.get("http://localhost:8060/api/v1/member/allPhysicians")
  }
createmember(member:{
id: number;
firstName: string;
lastName: string;
address: string;
state: string;
dob: string;
city: string;
email:string;
adminId: number;
})
{
  return this.http.post(Post_URL,member);
}

deletebyid( id:number){
 return this.http.delete( Delete_URL + id);
}
deleteAll(){
  return this.http.delete( Delete_URL);
}


  
  constructor(public http :HttpClient) { }
}


// updateStudent(id:number, student:{
//   id: number;
//   firstName: string;
//   lastName: string;
//   studentClass: string;
//   subject: string;
//   dob: string;
//   })
//   {
//     return this.http.post(Put_URL + id , student );
//   }

