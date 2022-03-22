import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../classes/registration';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : Registration=new Registration(); 

  submitted = false; 
  constructor( private registerservice: RegisterService) { }

  ngOnInit(): void {
  }

  registersaveform=new FormGroup({  
    member:new FormControl('' , [Validators.required ] ),
    role:new FormControl('' , [Validators.required ] ),
    branch:new FormControl('' , [Validators.required  ]),
    password: new FormControl('' , [Validators.required  ])
  });  

  saveUser(saveUser: any){  
    this.user=new Registration();   
    this.user.member=this.UserMember!.value;    
    this.user.role=this.UserRole!.value;  
    this.user.branch=this.UserBranch!.value;   
    this.user.password=this.UserPassword!.value; 
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.registerservice.addUser(this.user)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.user = new Registration();  
  }  

  get UserMember(){  
    return this.registersaveform.get('member');  
  }  
  
  get UserRole(){  
    return this.registersaveform.get('role');  
  }  
  
  get UserBranch(){  
    return this.registersaveform.get('branch');  
  }  
  
  get UserPassword(){  
    return this.registersaveform.get('password');  
  }  
   
  addUserForm(){  
    this.submitted=false;  
    this.registersaveform.reset();  
  }  
}
