import { COLOR } from './../../constant'
import { css } from '@emotion/react'

export const cssPaginationContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 800,
  gap: 16,
  button: {
    fontWeight: 800,
    backgroundColor: COLOR.blue,
    color: 'white',
    borderRadius: 100,
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: COLOR.grayBlue,
    },
    '&:disabled': {
      color: COLOR.darkBlue,
      backgroundColor: COLOR.gray,
      cursor: 'not-allowed',
    },
  },
})
