import { TeamVenueInterface } from './../../../shared/models/team.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() teamVenue: TeamVenueInterface;

  constructor() { }

  ngOnInit(): void {
  }

  public showTeamDetails(e){
    console.log(e)
  }

}
