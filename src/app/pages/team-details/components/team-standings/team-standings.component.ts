import { Component, Input, OnInit } from '@angular/core';
import { StandingsInterface } from 'src/app/shared/models/standings.interface';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {
  @Input() teamStandings: StandingsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
