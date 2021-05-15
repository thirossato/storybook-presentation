import { TeamService } from './../../shared/services/team.service';
import { TeamComponent } from './../components/team/team.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [HomeComponent, TeamComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers:[TeamService]
})
export class HomeModule { }
