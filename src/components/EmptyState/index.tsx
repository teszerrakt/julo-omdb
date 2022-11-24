/** @jsxImportSource @emotion/react */
import Image from '../Image'
import EmptyImage from '../../assets/image/empty.png'
import { cssEmpty, cssEmptyMessage, cssImgContainer } from './style'

const Empty = ({ message = 'Data Not Found :(' }) => {
  return (
    <div css={cssEmpty}>
      <div css={cssImgContainer}>
        <Image src={EmptyImage} alt="Empty" />
      </div>
      <a href="https://storyset.com/media">Media illustrations by Storyset</a>
      <span css={cssEmptyMessage}>{message}</span>
    </div>
  )
}

export default Empty
