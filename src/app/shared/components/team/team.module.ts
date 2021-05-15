import { MatCardModule } from '@angular/material/card';
import { TeamComponent } from './team.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[TeamComponent]
})
export class TeamModule { }
