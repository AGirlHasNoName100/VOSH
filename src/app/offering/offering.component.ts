import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Offering } from '../classes/offering';
import { Offerings } from '../classes/offerings';
import { OfferingService } from '../services/offering.service';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss']
})
export class OfferingComponent implements OnInit {
  term!: string;
  constructor(private offeringservice:OfferingService) { }
  
  offering : Offerings=new Offerings();  
  offerings!: Offering[];
  offeringlist:any;
  isupdated = false;
  deleteMessage = false;
  submitted = false;  

  ngOnInit(): void {
    this.offeringservice.findAll().subscribe(data => {
      this.offerings = data;
      console.log(this.offerings);
    });
this.isupdated = false;
    this.submitted=false;
  }
  deleteOffering(id: number) {  
    this.offeringservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.offeringservice.findAll().subscribe(data =>{  
            this.offerings =data  
            })  
        },  
        error => console.log(error));  
  }  
  offeringsaveform=new FormGroup({  
    branch:new FormControl('' , [Validators.required  ] ),
    amount:new FormControl('' , [Validators.required  ]),
    date: new FormControl('' , [Validators.required  ])
  });  

  saveOffering(saveOffering: any){  
    this.offering=new Offerings();     
    this.offering.branch=this.OfferingBranch!.value;  
    this.offering.amount=this.OfferingAmount!.value;   
    this.offering.date=this.OfferingDate!.value; 
  
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.offeringservice.addOffering(this.offering)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.offering = new Offerings();  
  }  

  get OfferingBranch(){  
    return this.offeringsaveform.get('branch');  
  }  
  
  get OfferingAmount(){  
    return this.offeringsaveform.get('amount');  
  }  
  
  get OfferingDate(){  
    return this.offeringsaveform.get('date');  
  }  
  
  addOfferingForm(){  
    this.submitted=false;  
    this.offeringsaveform.reset();  
  }  
  updateOffer(id: number){ 
    this.offeringservice.getOffering(id)  
      .subscribe(  
        data => {  
          this.offeringlist = data
          this.offeringlist = Array.of(this.offeringlist);
         // console.log(data)             
        },  
        error => console.log(error)); 
     
   }
  offeringupdateform=new FormGroup({  
    branch:new FormControl('' , [Validators.required  ] ),
    amount:new FormControl(),
    date: new FormControl()
  });  
  
  updateOfferings(id: number){  
    this.offering=new Offerings();     
    this.offering.branch=this.OfferingBranch1!.value;  
    this.offering.amount=this.OfferingAmount1!.value;   
    this.offering.date=this.OfferingDate1!.value; 
  
    this.submitted = true;  
     this.update(id);   
  }  
  update(id: number){
    this.offeringservice.updateOffering(id, this.offering).subscribe(  
     res => {      
      console.log(res)  
      this.isupdated=true; 
      this.offeringservice.findAll().subscribe(data =>{  
        this.offerings =data  
        
        })  
    },  
     
     (error) => console.log(error)); 
  }
  
  get OfferingBranch1(){  
    return this.offeringupdateform.get('branch');  
  }  
  
  get OfferingAmount1(){  
    return this.offeringupdateform.get('amount');  
  }  
  
  get OfferingDate1(){  
    return this.offeringupdateform.get('date');  
  }    
  
  changeisUpdate(){  
    this.isupdated=false;  
  }
}
