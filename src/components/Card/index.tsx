import React from 'react';
import { SearchItem } from "../../types";

interface ICardProps extends SearchItem {
  isLoading: boolean;
}

const Card = ({isLoading, Poster, Type, Year, Title, imdbID} : ICardProps) => {
  if (isLoading) return <div>Loading ...</div>

  return (
    <div>
      <img src={Poster} alt={`${Title} poster image`}/>
      <h2>{Title}</h2>
      <div>
        {Type} | {Year}
      </div>
    </div>
  )
}

export default Card