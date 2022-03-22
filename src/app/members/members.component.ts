import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from '../classes/member';
import { Members } from '../classes/members';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
term!: string;
  constructor(private memberservice:MembersService) { }

  member : Members=new Members();  
  members!: Member[];
  memberlist:any;
  detaillist: any;
  isupdated = false;
  deleteMessage = false;
  submitted = false;  

  ngOnInit(): void {
    this.memberservice.findAll().subscribe(data => {
      this.members = data;
      console.log(this.members);
    });
this.isupdated = false;
    this.submitted=false;
  }
  deleteMember(id: number) {  
    this.memberservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.memberservice.findAll().subscribe(data =>{  
            this.members =data  
            })  
        },  
        error => console.log(error));  
  }  

  memberssaveform=new FormGroup({  
    phone:new FormControl('' , [Validators.required , Validators.minLength(10) ] ),
    name:new FormControl('' , [Validators.required  ]),
    address: new FormControl('' , [Validators.required  ]),
    department: new FormControl('' , [Validators.required  ])
  });  

  saveMember(saveMember: any){  
    this.member=new Members();     
    this.member.name=this.MemberName!.value;  
    this.member.phone=this.MemberPhone!.value;   
    this.member.address=this.MemberAddress!.value; 
    this.member.department=this.MemberDepartment!.value; 
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.memberservice.addMember(this.member)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.member = new Members();  
  }  

  get MemberName(){  
    return this.memberssaveform.get('name');  
  }  
  
  get MemberPhone(){  
    return this.memberssaveform.get('phone');  
  }  
  
  get MemberAddress(){  
    return this.memberssaveform.get('address');  
  }  
  
  get MemberDepartment(){  
    return this.memberssaveform.get('department');  
  }  
  addMemberForm(){  
    this.submitted=false;  
    this.memberssaveform.reset();  
  }  

  updateMemb(id: number){ 

    this.memberservice.getMember(id)  
      .subscribe(  
        data => {  
          this.memberlist = data
          this.memberlist = Array.of(this.memberlist);
         // console.log(data)             
        },  
        error => console.log(error)); 
     
   }

  memberupdateform=new FormGroup({  
    phone:new FormControl('' , [ Validators.minLength(10) ] ),
    name:new FormControl(),
    address: new FormControl(),
    department: new FormControl()
  });  
  
  updateMember(id: number){  
    this.member=new Members();     
    this.member.name= this.MemberName1!.value;  
    this.member.phone=this.MemberPhone1!.value;  
    this.member.address=this.MemberAddress1!.value;  
    this.member.department=this.MemberDepartment1!.value;  
     this.update(id);   
  }  
  update(id: number){
    this.memberservice.updateMembers(id, this.member).subscribe(  
     res => {      
      console.log(res)  
      this.isupdated=true; 
      this.memberservice.findAll().subscribe(data =>{  
        this.members =data  
        
        })  
    },  
     
     (error) => console.log(error)); 
  }
  
  get MemberName1(){  
    return this.memberupdateform.get('name');  
  }  
  
  get MemberPhone1(){  
    return this.memberupdateform.get('phone');  
  }  
  
  get MemberAddress1(){  
    return this.memberupdateform.get('address');  
  }  
  get MemberDepartment1(){  
    return this.memberupdateform.get('department');  
  }  
  
  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }
  

}
