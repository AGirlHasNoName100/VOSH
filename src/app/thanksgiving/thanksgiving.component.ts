import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Thanksgiving } from '../classes/thanksgiving';
import { Thanksgivings } from '../classes/thanksgivings';
import { ThanksgivingService } from '../services/thanksgiving.service';

@Component({
  selector: 'app-thanksgiving',
  templateUrl: './thanksgiving.component.html',
  styleUrls: ['./thanksgiving.component.scss']
})
export class ThanksgivingComponent implements OnInit {
  term!: string;
  constructor(private thanksservice:ThanksgivingService) { }

  thanksgiving : Thanksgivings=new Thanksgivings();  
  thanksgivings!: Thanksgiving[];
  thankslist:any;
  isupdated = false;
  deleteMessage = false;
  submitted = false;  

  ngOnInit(): void {
    this.thanksservice.findAll().subscribe(data => {
      this.thanksgivings = data;
      console.log(this.thanksgivings);
    });
    this.isupdated = false;
    this.submitted=false;
  }
  deleteThanks(id: number) {  
    this.thanksservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.thanksservice.findAll().subscribe(data =>{  
            this.thanksgivings =data  
            })  
        },  
        error => console.log(error));  
  }  
  thankssaveform=new FormGroup({  
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    member: new FormControl('', [Validators.required]),
    branch:new FormControl('' ,[Validators.required] ),
    amount:new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });  

  saveThanks(saveThanks: any){  
    this.thanksgiving=new Thanksgivings(); 
    this.thanksgiving.name=this.ThanksName!.value; 
    this.thanksgiving.phone=this.ThanksPhone!.value; 
    this.thanksgiving.member=this.ThanksMember!.value;    
    this.thanksgiving.branch=this.ThanksBranch!.value;  
    this.thanksgiving.amount=this.ThanksAmount!.value;   
    this.thanksgiving.date=this.ThanksDate!.value; 
  
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.thanksservice.addThanks(this.thanksgiving)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.thanksgiving = new Thanksgivings();  
  }  

  get ThanksName(){  
    return this.thankssaveform.get('name');  
  }
  get ThanksPhone(){  
    return this.thankssaveform.get('phone');  
  }
  get ThanksMember(){  
    return this.thankssaveform.get('member');  
  }
  
  get ThanksBranch(){  
    return this.thankssaveform.get('branch');  
  }  
  
  get ThanksAmount(){  
    return this.thankssaveform.get('amount');  
  }  
  
  get ThanksDate(){  
    return this.thankssaveform.get('date');  
  }  
  
  addThanksForm(){  
    this.submitted=false;  
    this.thankssaveform.reset();  
  }  
  updateThanksgiving(id: number){ 
    this.thanksservice.getThanks(id)  
      .subscribe(  
        data => {  
          this.thankslist = data
          this.thankslist = Array.of(this.thankslist);
         // console.log(data)             
        },  
        error => console.log(error)); 
     
   }
  thanksupdateform=new FormGroup({  
    name: new FormControl(),
    phone: new FormControl(),
    member: new FormControl(),
    branch:new FormControl('' , [Validators.required  ] ),
    amount:new FormControl(),
    date: new FormControl()
  });  
  
  updateThanksgivings(id: number){  
    this.thanksgiving=new Thanksgivings(); 
    this.thanksgiving.name=this.ThanksName1!.value; 
    this.thanksgiving.phone=this.ThanksPhone1!.value; 
    this.thanksgiving.member=this.ThanksMember1!.value;    
    this.thanksgiving.branch=this.ThanksBranch1!.value;  
    this.thanksgiving.amount=this.ThanksAmount1!.value;   
    this.thanksgiving.date=this.ThanksDate1!.value; 
  
    this.submitted = true;  
     this.update(id);   
  }  
  update(id: number){
    this.thanksservice.updateThanks(id, this.thanksgiving).subscribe(  
     res => {      
      console.log(res)  
      this.isupdated=true; 
      this.thanksservice.findAll().subscribe(data =>{  
        this.thanksgivings =data  
        
        })  
    },  
     
     (error) => console.log(error)); 
  }
  
  get ThanksName1(){  
    return this.thankssaveform.get('name');  
  }
  get ThanksPhone1(){  
    return this.thankssaveform.get('phone');  
  }
  get ThanksMember1(){  
    return this.thankssaveform.get('member');  
  }
  
  get ThanksBranch1(){  
    return this.thankssaveform.get('branch');  
  }  
  
  get ThanksAmount1(){  
    return this.thankssaveform.get('amount');  
  }  
  
  get ThanksDate1(){  
    return this.thankssaveform.get('date');  
  }    
  
  changeisUpdate(){  
    this.isupdated=false;  
  }

}
