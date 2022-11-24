/** @jsxImportSource @emotion/react */
import Image from '../Image'
import errorImage from '../../assets/image/error.png'
import { cssError, cssErrorMessage, cssImgContainer } from './style'

const Error = ({ message = 'Unknown Error Happenend :(' }) => {
  return (
    <div css={cssError}>
      <div css={cssImgContainer}>
        <Image src={errorImage} alt="error" />
      </div>
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
      <span css={cssErrorMessage}>{message}</span>
    </div>
  )
}

export default Error
