import { TeamRosterInterface } from './../../shared/models/team-roster.interface';
import { TeamService } from '../../shared/services/team.service';
import { StandingsInterface, StanginsResponseInterface } from '../../shared/models/standings.interface';
import { TeamVenueInterface } from '../../shared/models/team.interface';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerInterface } from 'src/app/shared/models/player.interface';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  public teamVenue: TeamVenueInterface;
  public teamStandings: StandingsInterface;
  public teamRoster: Array<PlayerInterface>;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamVenue = history.state.data

    this.teamService.getTeamStandings(this.teamVenue.team.id).subscribe((success: StanginsResponseInterface) => {
      this.teamStandings = success.response[0].league.standings[0][0];
    }, error => {
      console.log(error);
    });

    this.teamService.getTeamRoster(this.teamVenue.team.id).subscribe((success: TeamRosterInterface) => {
      this.teamRoster = success.response
    }, error => {
      console.log(error);
    })

  }

}
