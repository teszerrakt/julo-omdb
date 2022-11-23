/** @jsxImportSource @emotion/react */
import { Skeleton } from '../Skeleton'
import { cssCard, cssCardDetailContainer, cssImgContainer } from './style'

export const CardSkeleton = () => {
  return (
    <div css={cssCard}>
      <div css={cssImgContainer}>
        <Skeleton height="60vh" />
      </div>
      <div css={cssCardDetailContainer}>
        <div>
          <Skeleton height={24} />
          <Skeleton height={24} width="75%" />
          <Skeleton width="50%" />
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton
