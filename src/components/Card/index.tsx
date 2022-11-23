/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom'
import { SearchItem } from '../../types'
import { capitalize } from '../../utils'
import { cssCard, cssCardDetailContainer, cssImgContainer } from './style'

interface ICardProps extends SearchItem {
  isLoading: boolean
}

const Card = ({ isLoading, Poster, Type, Year, Title, imdbID }: ICardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${imdbID}`)
  }

  if (isLoading) return <div>Loading ...</div>

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
