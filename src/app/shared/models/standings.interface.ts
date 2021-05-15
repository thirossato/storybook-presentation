export interface StandingsInterface{
  rank: number;
  points:number;
  goalsDiff: number;
  form: string;
  status: string;
  all: StandingResultsInterface;
}

export interface StandingResultsInterface{
  played:number;
  win:number;
  lose:number;
  draw:number;
  goals: {
    for: number;
    against:number
  }
}
