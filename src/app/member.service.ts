import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const Post_URL="http://localhost:8086/member"
const Delete_URL= "http://localhost:8086/deleteMember/"
// const Put_URL = "http://localhost:8090/updateStudent/"

@Injectable({
  providedIn: 'root'
})
export class MemberService {
 

  getMembers(){
    return this.http.get("http://localhost:8086/allMemberService")
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

