import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tithe } from '../classes/tithe';
import { Tithes } from '../classes/tithes';

import { TitheService } from '../services/tithe.service';

@Component({
  selector: 'app-tithe',
  templateUrl: './tithe.component.html',
  styleUrls: ['./tithe.component.scss']
})
export class TitheComponent implements OnInit {

  term!: any;
  constructor(private titheservice:TitheService) { }

  tithe : Tithe=new Tithe();  
  tithes!: Tithes[];
  tithelist:any;
  isupdated = false;
  deleteMessage = false;
  submitted = false;  

  ngOnInit() {
    this.titheservice.findAll().subscribe(data => {
      this.tithes = data;
      console.log(data);
    });
    this.isupdated = false;
    this.submitted=false;  
  }
  deleteTithe(id: number) {  
    this.titheservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.titheservice.findAll().subscribe(data =>{  
            this.tithes =data  
            })  
        },  
        error => console.log(error));  
  }  
  tithesaveform=new FormGroup({  
    phone:new FormControl('' , [Validators.required , Validators.minLength(10) ] ),
    name:new FormControl('' ,[Validators.required] ),
    amount: new FormControl('' ,[Validators.required] ),
    member: new FormControl('' ,[Validators.required] ),
    date: new FormControl('' ,[Validators.required] )
  });  

  saveTithe(saveTithe: any){  
    this.tithe=new Tithe();     
    this.tithe.name=this.TitheName!.value;  
    this.tithe.phone=this.TithePhone!.value;  
    this.tithe.member=this.TitheMember!.value;  
    this.tithe.amount=this.TitheAmount!.value; 
    this.tithe.date=this.TitheDate!.value; 
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.titheservice.addTithe(this.tithe)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.tithe = new Tithe();  
  }  

  get TitheName(){  
    return this.tithesaveform.get('name');  
  }  
  
  get TithePhone(){  
    return this.tithesaveform.get('phone');  
  }  
  
  get TitheMember(){  
    return this.tithesaveform.get('member');  
  }  
  get TitheAmount(){  
    return this.tithesaveform.get('amount');  
  }  
  
  get TitheDate(){  
    return this.tithesaveform.get('date');  
  }  
  addTitheForm(){  
    this.submitted=false;  
    this.tithesaveform.reset();  
  }  
  updateT(id: number){
    this.titheservice.getTithe(id)  
      .subscribe(  
        data => {  
          this.tithelist = data
          this.tithelist = Array.of(this.tithelist);
          //console.log(data)             
        },  
        error => console.log(error)); 
     
   }
  titheupdateform=new FormGroup({  
    phone:new FormControl(),
    name:new FormControl(),
    amount: new FormControl(),
    member: new FormControl(),
    date: new FormControl()
  });  
  
  updateTithes(id: number){  
    this.tithe=new Tithe();     
    this.tithe.name= this.TitheName1!.value;  
    this.tithe.phone=this.TithePhone1!.value;  
    this.tithe.amount=this.TitheAmount1!.value;  
    this.tithe.date=this.TitheDate1!.value;  
    this.tithe.member=this.TitheMember1!.value;  
     this.update(id);   
  }  
  update(id: number){
    this.titheservice.updateTithe(id, this.tithe).subscribe(  
     res => {      
      console.log(res)  
      this.isupdated=true; 
      this.titheservice.findAll().subscribe(data =>{  
        this.tithes=data  
        
        })  
    },  
     
     (error) => console.log(error)); 
  }
  
  get TitheName1(){  
    return this.titheupdateform.get('name');  
  }  
  
  get TithePhone1(){  
    return this.titheupdateform.get('phone');  
  }  
  
  get TitheAmount1(){  
    return this.titheupdateform.get('amount');  
  }  
  get TitheDate1(){  
    return this.titheupdateform.get('date');  
  }  
  get TitheMember1(){  
    return this.titheupdateform.get('member');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }
}
