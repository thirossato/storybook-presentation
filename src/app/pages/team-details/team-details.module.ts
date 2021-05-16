import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TeamModule } from './../../shared/components/team/team.module';
import { TeamDetailsComponent } from './team-details.component';
import { TeamStandingsComponent } from './components/team-standings/team-standings.component';
import { TeamRosterComponent } from './components/team-roster/team-roster.component';



@NgModule({
  declarations: [TeamDetailsComponent, TeamStandingsComponent, TeamRosterComponent],
  imports: [
    CommonModule,
    TeamModule,
    MatCardModule,
    MatIconModule
  ]
})
export class TeamDetailsModule { }
