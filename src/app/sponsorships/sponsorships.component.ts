import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sponsorship } from '../classes/sponsorship';
import { Sponsorships } from '../classes/sponsorships';
import { SponsorshipService } from '../services/sponsorship.service';

@Component({
  selector: 'app-sponsorships',
  templateUrl: './sponsorships.component.html',
  styleUrls: ['./sponsorships.component.scss']
})
export class SponsorshipsComponent implements OnInit {
  term!: string;
  constructor(private sponsorservice: SponsorshipService) { }

  sponsorships!: Sponsorships[];
  sponsorship: Sponsorship = new Sponsorship();
  sponsorlist!:any;
  details:any;
  isupdated = false;
  deleteMessage = false;
  submitted = false; 
  public showDetails: boolean = false;
  ngOnInit(): void {
    this.sponsorservice.findAll().subscribe(data => {
      this.sponsorships = data;
      console.log(data);
    });
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
 }

  deleteSponsorship(id: number) {  
    this.sponsorservice.delete(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.sponsorservice.findAll().subscribe(data =>{  
            this.sponsorships =data  
            })  
        },  
        error => console.log(error));  
  }  
  sponsorsaveform=new FormGroup({  
    member:new FormControl('' , [Validators.required] ),
    name:new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required , Validators.minLength(10)]),
    branch: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    mother: new FormControl('', [Validators.required]),
    father: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  });  

  saveSponsor(saveSponsor: any){  
    this.sponsorship=new Sponsorship();     
    this.sponsorship.member=this.SponsorMember!.value;  
    this.sponsorship.phone=this.SponsorPhone!.value;   
    this.sponsorship.name=this.SponsorName!.value; 
    this.sponsorship.branch=this.SponsorBranch!.value; 
    this.sponsorship.type=this.SponsorType!.value; 
    this.sponsorship.start=this.SponsorStart!.value; 
    this.sponsorship.end=this.SponsorEnd!.value; 
    this.sponsorship.mother=this.SponsorMother!.value; 
    this.sponsorship.father=this.SponsorFather!.value; 
    this.sponsorship.amount=this.SponsorAmount!.value; 
    this.submitted = true;  
    this.save();  
  }  

  save() {  
  this.sponsorservice.addSponsor(this.sponsorship)
  .subscribe((data: any) => console.log(data), 
  (error: any) => console.log(error));  
  this.sponsorship = new Sponsorship();  
  }  

  get SponsorMember(){  
    return this.sponsorsaveform.get('member');  
  }  
  
  get SponsorName(){  
    return this.sponsorsaveform.get('name');  
  }  
  
  get SponsorPhone(){  
    return this.sponsorsaveform.get('phone');  
  }  
  get SponsorType(){  
    return this.sponsorsaveform.get('type');  
  } 

  get SponsorBranch(){  
    return this.sponsorsaveform.get('branch');  
  }  
  get SponsorStart(){  
    return this.sponsorsaveform.get('start');  
  } 
  get SponsorEnd(){  
    return this.sponsorsaveform.get('end');  
  } 
  get SponsorMother(){  
    return this.sponsorsaveform.get('mother');  
  } 
  get SponsorFather(){  
    return this.sponsorsaveform.get('father');  
  } 
  get SponsorAmount(){  
    return this.sponsorsaveform.get('amount');  
  } 
  addSponsorForm(){  
    this.submitted=false;  
    this.sponsorsaveform.reset();  
  }  
  updateSponsor(id: number){ 
    this.sponsorservice.getSponsor(id)  
      .subscribe(  
        data => {  
          this.sponsorlist = data
          this.sponsorlist = Array.of(this.sponsorlist);
         // console.log(data)             
        },  
        error => console.log(error)); 
     
   }
   viewDetails(id:number){
    this.sponsorservice.getSponsor(id)  
    .subscribe(  
      data => {  
        this.details = data
        this.details = Array.of(this.details);
      },
      error => console.log(error)); 
      
   }
  sponsorupdateform=new FormGroup({  
    member:new FormControl(),
    name:new FormControl(),
    phone: new FormControl(),
    branch: new FormControl(),
    type: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    mother: new FormControl(),
    father: new FormControl(),
    amount: new FormControl()
  });  
  
  updateSponsorship(id: number){  
    this.sponsorship=new Sponsorship(); 
    this.sponsorship.member=this.SponsorMember1!.value;  
    this.sponsorship.phone=this.SponsorPhone1!.value;   
    this.sponsorship.name=this.SponsorName1!.value; 
    this.sponsorship.branch=this.SponsorBranch1!.value; 
    this.sponsorship.type=this.SponsorType1!.value; 
    this.sponsorship.start=this.SponsorStart1!.value; 
    this.sponsorship.end=this.SponsorEnd1!.value; 
    this.sponsorship.mother=this.SponsorMother1!.value; 
    this.sponsorship.father=this.SponsorFather1!.value; 
    this.sponsorship.amount=this.SponsorAmount1!.value; 
     this.update(id);   
  }  
  update(id: number){
    this.sponsorservice.updateSponsor(id, this.sponsorship).subscribe(  
     res => {      
      console.log(res)  
      this.isupdated=true; 
      this.sponsorservice.findAll().subscribe(data =>{  
        this.sponsorships =data  
        
        })  
    },  
     
     (error) => console.log(error)); 
  }
  
  get SponsorMember1(){  
    return this.sponsorupdateform.get('member');  
  }  
  
  get SponsorName1(){  
    return this.sponsorupdateform.get('name');  
  }  
  
  get SponsorPhone1(){  
    return this.sponsorupdateform.get('phone');  
  }  
  get SponsorType1(){  
    return this.sponsorupdateform.get('type');  
  } 

  get SponsorBranch1(){  
    return this.sponsorupdateform.get('branch');  
  }  
  get SponsorStart1(){  
    return this.sponsorupdateform.get('start');  
  } 
  get SponsorEnd1(){  
    return this.sponsorupdateform.get('end');  
  } 
  get SponsorMother1(){  
    return this.sponsorupdateform.get('mother');  
  } 
  get SponsorFather1(){  
    return this.sponsorupdateform.get('father');  
  } 
  get SponsorAmount1(){  
    return this.sponsorupdateform.get('amount');  
  } 
  
  changeisUpdate(){  
    this.isupdated=false;  
  }
}
