import { COLOR } from './../../constant'
import { css } from '@emotion/react'

export const cssNavigator = css({
  display: 'flex',
  justifyContent: 'center',
  zIndex: 999,
  gap: 16,
  bottom: 0,
  left: 0,
  padding: 16,
  position: 'fixed',
  backgroundColor: COLOR.grayBlue,
  width: '100%',
  a: {
    borderRadius: 16,
    fontWeight: 800,
    padding: 16,
    color: 'white',
    textDecoration: 'none',
    '&.active, &:hover': {
      backgroundColor: COLOR.darkBlue,
    },
  },
})
