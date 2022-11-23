import { COLOR } from './../../constant'
import { css } from '@emotion/react'

export const cssNavigator = css({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 16,
  zIndex: 999,
  gap: 16,
  margin: 32,
  bottom: 0,
  left: 0,
  padding: 16,
  position: 'fixed',
  backgroundColor: COLOR.grayBlue,
  border: `solid 1px ${COLOR.blue}`,
  width: 'calc(100% - 32px * 3)',
  a: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 16,
    fontWeight: 800,
    padding: 12,
    color: 'white',
    textDecoration: 'none',
    '&.active, &:hover': {
      backgroundColor: COLOR.darkBlue,
    },
  },
})
