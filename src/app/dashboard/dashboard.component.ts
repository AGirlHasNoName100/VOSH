import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public show:boolean = true;
  public buttonName:any = 'Hide Menu';
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide Menu";
    else
      this.buttonName = "View Menu";
  }
}
