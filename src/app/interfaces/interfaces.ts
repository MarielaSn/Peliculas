//import { Pelicula } from 'src/app/interfaces/interfaces';


export interface RespuestaMDB {
  page:          number;
  total_results: number;
  total_pages:   number;
  results:       Pelicula[];
}

export interface Pelicula {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

//PELICULA DETALLES
export interface PeliculaDetalle {
  adult?:                 boolean;
  backdrop_path?:         string;
  belongs_to_collection?: null;
  budget?:                number;
  genres?:                Genre[];
  homepage?:              string;
  id?:                    number;
  imdb_id?:               string;
  origin_country?:        string[];
  original_language?:     string;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  production_companies?:  ProductionCompany[];
  production_countries?:  ProductionCountry[];
  release_date?:          Date;
  revenue?:               number;
  runtime?:               number;
  spoken_languages?:      SpokenLanguage[];
  status?:                string;
  tagline?:               string;
  title?:                 string;
  video?:                 boolean;
  vote_average?:          number;
  vote_count?:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

//CREDITS ACTORES
export interface RespuestaCredits {
  id:   number;
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  credit_id:            string;
  department:           string;
  gender:               number;
  id:                   number;
  job:                  string;
  name:                 string;
  profile_path:         string;
}



export interface Cast {
  cast_id:              number;
  character:            string;
  credit_id:            string;
  gender:               number;
  id:                   number;
  name:                 string;
  order:                number;
  profile_path:         string;
}



