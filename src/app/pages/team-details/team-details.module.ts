import { TeamModule } from './../../shared/components/team/team.module';

import { TeamDetailsComponent } from './team-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TeamDetailsComponent],
  imports: [
    CommonModule,
    TeamModule
  ]
})
export class TeamDetailsModule { }
