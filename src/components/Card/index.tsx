/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom'
import { SearchItem } from '../../types'
import { capitalize } from '../../utils'
import { cssCard, cssCardDetailContainer, cssImgContainer } from './style'

const Card = ({ Poster, Type, Year, Title, imdbID }: SearchItem) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${imdbID}`)
  }

  return (
    <div css={cssCard} onClick={handleClick}>
      <div css={cssImgContainer}>
        <img src={Poster} alt={`${Title} poster`} />
      </div>
      <div css={cssCardDetailContainer}>
        <h2>{Title}</h2>
        <div>
          {capitalize(Type)} | {Year}
        </div>
      </div>
    </div>
  )
}

export default Card
