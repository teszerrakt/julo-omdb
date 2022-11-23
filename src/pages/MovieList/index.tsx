import React, {useState} from 'react';
import { SearchResponse } from "../../types";
import { MOVIE_SEARCH_SUCCESS_RESPONSE } from "../../__tests__/__data_mocks__";
import Card from "../../components/Card";

const MovieList = () => {
  const [data, setData] = useState<SearchResponse>(MOVIE_SEARCH_SUCCESS_RESPONSE)
  const movieList = data.Search

  return (
    <div>
      {movieList.length === 0 ?
        <div>Empty State</div> :
        movieList.map(movie => {
          <Card key={movie.imdbID} isLoading={false} {...movie}/>
        })
      }
    </div>
  )
}

export default MovieList