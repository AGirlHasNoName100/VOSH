import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Department } from '../classes/department';
import { Departments } from '../classes/departments';
import { DepartmentsService } from '../services/departments.service';
//import {NgxPaginationModule} from 'ngx-pagination';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  term!: string;

  constructor(private deptservice:DepartmentsService) { 
    
  }

  dept : Departments=new Departments(); 
  departments!: Department[]; 
  isupdated = false;
  deleteMessage = false;
  deptlist: any;
  submitted = false;  

  ngOnInit(): void { 
   
    this.deptservice.findAll().subscribe(data => {
      this.departments = data;
      console.log(this.departments); 
    });

    this.submitted=false;  
    this.isupdated = false;  
  }
  deleteDepart(id: number) {  
    this.deptservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.deptservice.findAll().subscribe(data =>{  
            this.departments =data  
            })  
        },  
        error => console.log(error));  
  }  
     
  deptsaveform=new FormGroup({  
    deptname:new FormControl(),
    chairperson:new FormControl('', [Validators.required]),
    asschairperson: new FormControl('', [Validators.required]),
    secretary: new FormControl('', [Validators.required]),
    treasurer: new FormControl('', [Validators.required]),
    matron: new FormControl(),
    patron: new FormControl(),
    branch: new FormControl('', [Validators.required])
  });  

  saveDept(saveDept: any){  
    this.dept=new Departments();     
    this.dept.deptname= this.DeptDeptname!.value;  
    this.dept.chairperson=this.DeptChairperson!.value;  
    this.dept.asschairperson=this.DeptAsschairperson!.value;  
    this.dept.secretary=this.DeptSecretary!.value; 
    this.dept.treasurer=this.DeptTreasurer!.value;
    this.dept.matron=this.DeptMatron!.value; 
    this.dept.patron=this.DeptPatron!.value;  
    this.dept.branch=this.DeptBranch!.value;  

    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.deptservice.addDept(this.dept)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.dept = new Departments();  
  }  

  get DeptDeptname(){  
    return this.deptsaveform.get('deptname');  
  }  
  
  get DeptChairperson(){  
    return this.deptsaveform.get('chairperson');  
  }  
  
  get DeptAsschairperson(){  
    return this.deptsaveform.get('asschairperson');  
  }  
  get DeptSecretary(){  
    return this.deptsaveform.get('secretary');  
  }  
  
  get DeptTreasurer(){  
    return this.deptsaveform.get('treasurer');  
  }  

  get DeptMatron(){  
    return this.deptsaveform.get('matron');  
  } 

  get DeptPatron(){  
    return this.deptsaveform.get('patron');  
  } 
  get DeptBranch(){  
    return this.deptsaveform.get('branch');  
  } 

  addDeptForm(){  
    this.submitted=false;  
    this.deptsaveform.reset();  
  }  
  
  updateDept(id: number){ 

    this.deptservice.getDept(id)  
      .subscribe(  
        data => {  
          this.deptlist = data
          this.deptlist = Array.of(this.deptlist);
                    
        },  
        error => console.log(error)); 
     
   }
  deptupdateform=new FormGroup({  
    deptname:new FormControl(),
    chairperson:new FormControl(),
    asschairperson: new FormControl(),
    secretary: new FormControl(),
    treasurer: new FormControl(),
    matron: new FormControl(),
    patron: new FormControl(),
    branch: new FormControl()
  });  
  
  updateDepartment(id:number){  
    this.dept=new Departments();     
    this.dept.deptname= this.DeptDeptname1!.value;  
    this.dept.chairperson=this.DeptChairperson1!.value;  
    this.dept.asschairperson=this.DeptAsschairperson1!.value;  
    this.dept.secretary=this.DeptSecretary1!.value; 
    this.dept.treasurer=this.DeptTreasurer1!.value;
    this.dept.matron=this.DeptMatron1!.value; 
    this.dept.patron=this.DeptPatron1!.value;  
    this.dept.branch=this.DeptBranch1!.value;  
   this.update(id);    
    
  }  

  update(id: number){
    this.deptservice.updateDept(id,this.dept).subscribe(
    res => {
  console.log(res) 
  this.isupdated=true
  this.deptservice.findAll().subscribe(data =>{  
          this.departments =data  
        })
    }, 
  error => console.log(error));  

  }
 
  get DeptDeptname1(){  
    return this.deptsaveform.get('deptname');  
  }  
  
  get DeptChairperson1(){  
    return this.deptsaveform.get('chairperson');  
  }  
  
  get DeptAsschairperson1(){  
    return this.deptsaveform.get('asschairperson');  
  }  
  get DeptSecretary1(){  
    return this.deptsaveform.get('secretary');  
  }  
  
  get DeptTreasurer1(){  
    return this.deptsaveform.get('treasurer');  
  }  

  get DeptMatron1(){  
    return this.deptsaveform.get('matron');  
  } 

  get DeptPatron1(){  
    return this.deptsaveform.get('patron');  
  } 
  get DeptBranch1(){  
    return this.deptsaveform.get('branch');  
  } 
  
  changeisUpdate(){  
    this.isupdated=false;  
  }
}
