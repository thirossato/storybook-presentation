import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { TeamResponseInterface } from './../models/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "x-rapidapi-key": "553659e617mshb77bc2079c26c88p189f1cjsn00b3b2b5cfeb",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "async": 'true',
      "crossDomain": 'true',
    })
  };

  constructor(private httpClient: HttpClient) { }

  public listTeams(): Observable<TeamResponseInterface>{
    const url = "https://api-football-v1.p.rapidapi.com/v3/teams?league=71&season=2021"
    return this.httpClient.get(url, this.httpOptions) as Observable<TeamResponseInterface>;
  }
}
