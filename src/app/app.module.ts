import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule} from './dashboard/dashboard-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitheComponent } from './tithe/tithe.component';
import { OfferingComponent } from './offering/offering.component';
import { WelfareComponent } from './welfare/welfare.component';
import { DevelopmentComponent } from './development/development.component';
import { ThanksgivingComponent } from './thanksgiving/thanksgiving.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';
import { ReportsComponent } from './reports/reports.component';
import { MembersComponent } from './members/members.component';
import {DepartmentsService} from './services/departments.service'
import { TitheService} from './services/tithe.service';
import { MembersService } from './services/members.service';
import { ActivityComponent } from './activity/activity.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    TitheComponent,
    OfferingComponent,
    WelfareComponent,
    DevelopmentComponent,
    ThanksgivingComponent,
    DepartmentsComponent,
    SponsorshipsComponent,
    ReportsComponent,
    MembersComponent,
    ActivityComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [TitheService, MembersService, DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
