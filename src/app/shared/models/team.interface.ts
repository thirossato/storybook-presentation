export interface TeamResponseInterface {
  response: Array<TeamVenueInterface>;
}

export interface TeamVenueInterface {
  team: TeamInterface;
  venue: VenueInterface;
}

export interface TeamInterface {
  id: number;
  name: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface VenueInterface {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}
