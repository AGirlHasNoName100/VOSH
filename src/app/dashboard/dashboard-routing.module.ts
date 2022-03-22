import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from '../activity/activity.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { DevelopmentComponent } from '../development/development.component';
import { MembersComponent } from '../members/members.component';
import { OfferingComponent } from '../offering/offering.component';
import { ReportsComponent } from '../reports/reports.component';
import { SponsorshipsComponent } from '../sponsorships/sponsorships.component';
import { ThanksgivingComponent } from '../thanksgiving/thanksgiving.component';
import { TitheComponent } from '../tithe/tithe.component';
import { WelfareComponent } from '../welfare/welfare.component';

const routes: Routes = [
  {path: 'tithe', component: TitheComponent},
  {path: 'thanksgiving', component: ThanksgivingComponent},
  {path: 'development', component:DevelopmentComponent},
  {path: 'offering', component: OfferingComponent},
  {path: 'welfare', component: WelfareComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'sponsorships', component: SponsorshipsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'members', component: MembersComponent},
  {path: 'activity', component: ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
