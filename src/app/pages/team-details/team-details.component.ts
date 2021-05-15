import { TeamService } from '../../shared/services/team.service';
import { StandingsInterface } from '../../shared/models/standings.interface';
import { TeamVenueInterface } from '../../shared/models/team.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input() teamVenue: TeamVenueInterface;
  public teamStandings: StandingsInterface;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeamStandings(this.teamVenue.team.id);
  }

}
