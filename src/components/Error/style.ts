import { COLOR } from './../../constant'
import { css } from '@emotion/react'

export const cssError = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  a: {
    textDecoration: 'none',
    color: COLOR.gray,
    fontSize: '0.75rem',
  },
})

export const cssImgContainer = css({
  height: 300,
  img: {
    height: '100%',
  },
})

export const cssErrorMessage = css({
  fontSize: '1.5rem',
  fontWeight: 800,
  color: COLOR.blue,
})
