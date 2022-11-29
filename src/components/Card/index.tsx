/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom'
import { Cake, SearchItem } from '../../types'
import { capitalize } from '../../utils'
import { cssCard, cssCardDetailContainer, cssImgContainer } from './style'
import Image from '../../components/Image'

const Card = ({ id, image, description, rating, title }: Cake) => {
  const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate(`/cakes/${id}`)
  // }

  return (
    <div css={cssCard}>
      <div css={cssImgContainer}>
        <Image src={image} alt={`${title} poster`} />
      </div>
      <div css={cssCardDetailContainer}>
        <h2>{<title></title>}</h2>
        <div>
          {rating}
        </div>
      </div>
    </div>
  )
}

export default Card
