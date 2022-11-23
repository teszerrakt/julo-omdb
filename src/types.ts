export interface SearchItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Search: SearchItem[];
  totalResults: string;
  Response: boolean;
}