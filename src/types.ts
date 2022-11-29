export interface SearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchResponse {
  Search: SearchItem[]
  totalResults: string
  Response: string
}

interface Rating {
  Source: string
  Value: string
}

export interface MovieDetailResponse {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Collections {
  [movieId: string]: MovieDetailResponse
}

interface ResponseWrapper<Data> {
  status: string
  message: string
  data: Data
}

export interface Cake {
  id: number
  title: string
  description: string
  rating: number
  image: string
  created_at: string
  updated_at: string
}

export type CakeList = ResponseWrapper<Cake[]>
