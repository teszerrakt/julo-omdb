/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react'
import { cssSkeleton } from './style'

interface ISkeletonProps {
  height?: string | number
  width?: string | number
  css?: Interpolation<Theme>
}

export const Skeleton = ({ css, height, width }: ISkeletonProps) => {
  return <div css={[cssSkeleton(width, height), css]} />
}
