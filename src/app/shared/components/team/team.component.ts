
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TeamVenueInterface } from '../../models/team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() teamVenue: TeamVenueInterface;
  @Input() showContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('show content', this.showContent);

  }

}
