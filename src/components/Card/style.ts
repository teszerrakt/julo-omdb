import { COLOR, MQ } from './../../constant'
import { css } from '@emotion/react'

export const cssCard = css({
  height: 'fit-content',
  backgroundColor: COLOR.grayBlue,
  border: `solid 1px ${COLOR.blue}`,
  borderRadius: 16,
  padding: 16,
  '&:hover': {
    filter: 'brightness(1.25)',
    transform: 'scale(1.05)',
    transition: '300ms',
    cursor: 'pointer',
  },
  [MQ[1]]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
    gap: 16,
    alignItems: 'center',
  },
  [MQ[4]]: {
    gap: 32,
  },
})

export const cssCardDetailContainer = css({
  marginBottom: 16,
  h2: {
    marginBottom: 8,
    color: COLOR.blue,
  },
  [MQ[3]]: {
    fontSize: '1.25rem',
    h2: {
      fontSize: '2rem',
    },
  },
  [MQ[4]]: {
    fontSize: '2rem',
    h2: {
      fontSize: '3rem',
    },
  },
})

export const cssImgContainer = css({
  img: {
    objectFit: 'contain',
    width: '100%',
    borderRadius: 12,
  },
})
