export interface AppData {
  request:  Request;
  location: Location;
  current:  Current;
  forecast: Forecast;
}

export interface Current {
  observationTime:     string;
  temperature:         number;
  weatherCode:         number;
  weatherIcons:        string[];
  weatherDescriptions: string[];
  windSpeed:           number;
  windDegree:          number;
  windDir:             string;
  pressure:            number;
  precip:              number;
  humidity:            number;
  cloudcover:          number;
  feelslike:           number;
  uvIndex:             number;
  visibility:          number;
  isDay:               string;
}

export interface Forecast {
  the20220814: The20220814;
}

export interface The20220814 {
  date:      Date;
  dateEpoch: number;
  astro:     Astro;
  mintemp:   number;
  maxtemp:   number;
  avgtemp:   number;
  totalsnow: number;
  sunhour:   number;
  uvIndex:   number;
}

export interface Astro {
  sunrise:          string;
  sunset:           string;
  moonrise:         string;
  moonset:          string;
  moonPhase:        string;
  moonIllumination: number;
}

export interface Location {
  name:           string;
  country:        string;
  region:         string;
  lat:            string;
  lon:            string;
  timezoneID:     string;
  localtime:      string;
  localtimeEpoch: number;
  utcOffset:      string;
}

export interface Request {
  type:     string;
  query:    string;
  language: string;
  unit:     string;
}
