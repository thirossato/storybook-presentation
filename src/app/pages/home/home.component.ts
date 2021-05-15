import { TeamService } from './../../shared/services/team.service';
import { Component, OnInit } from '@angular/core';
import { TeamVenueInterface } from 'src/app/shared/models/team.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public teamVenues: Array<TeamVenueInterface>;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.listTeams().subscribe(api => { this.teamVenues = api.response }, error => console.error(error));
  }

}
