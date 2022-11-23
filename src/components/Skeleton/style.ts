import { css, keyframes } from '@emotion/react'
import { COLOR } from '../../constant'

const skeletonLoading = keyframes({
  '0%': {
    backgroundColor: COLOR.darkBlue,
  },
  '100%': {
    backgroundColor: COLOR.grayBlue,
  },
})

export const cssSkeleton = (
  width: string | number = '100%',
  height: string | number = 16
) =>
  css({
    margin: '8px 0',
    borderRadius: 12,
    height,
    width,
    animation: `${skeletonLoading} 1s linear infinite alternate`,
  })
