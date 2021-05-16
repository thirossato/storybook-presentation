import { Component, Input, OnInit } from '@angular/core';
import { PlayerInterface } from './../../../../shared/models/player.interface';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {
  @Input() player: PlayerInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
