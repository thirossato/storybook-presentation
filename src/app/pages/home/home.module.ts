import { RouterModule } from '@angular/router';
import { TeamModule } from './../../shared/components/team/team.module';
import { TeamService } from './../../shared/services/team.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    TeamModule,
    RouterModule
  ],
  providers:[TeamService]
})
export class HomeModule { }
