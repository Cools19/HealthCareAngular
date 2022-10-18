import { Component, OnInit } from '@angular/core';
import Member from 'src/app/entity/Member';
import { MemberService } from 'src/app/member.service';
import Admin from 'src/app/entity/Admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  member:Member = new Member();
  members:Member[] = [];
  admins:Admin[] = [];
  save(){
    const observable = this.memberService.createmember(this.member);
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

  // deletebyid(index){
  //   const observable = this.memberService.deletebyid(index);
  //   observable.subscribe((response: any)=>{
  //     console.log(response);
  //     this.members.splice(index, 1);
  //   }) 

  // }
  // deleteAll(){
  //   const observable = this.memberService. deleteAll();
  //   observable.subscribe((response: any)=>{
  //     console.log(response);
  //   }) 

  // }
  

  
  
  constructor(public memberService:MemberService) { }

  ngOnInit(): void {
    const promise = this.memberService.getMembers();
    promise.subscribe((response)=>{
      console.log(response);
      this.members = response as Member[];
    })
    
    const admins = this.memberService.getAdmins();
    admins.subscribe((response)=>{
      console.log(response);
      this.admins = response as Admin[];
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
