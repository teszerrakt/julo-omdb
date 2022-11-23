import { COLOR, MQ } from './../../constant'
import { css } from '@emotion/react'

const cssCard = {
  padding: 16,
  background: COLOR.grayBlue,
  borderRadius: 16,
  border: `solid 1px ${COLOR.blue}`,
  height: 'fit-content',
}

export const cssMovieDetailContainer = css({
  padding: 32,
})

export const cssHeader = css({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  width: '`calc(100% - 2 * 32px)`',
  marginBottom: 32,
  h1: {
    color: COLOR.blue,
    fontSize: '1.5rem',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  button: {
    borderRadius: '100%',
    minHeight: 40,
    minWidth: 40,
    maxHeight: 40,
    maxWidth: 40,
    color: COLOR.grayBlue,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: COLOR.blue,
    '&:hover': {
      backgroundColor: COLOR.darkBlue,
    },
  },
  ...cssCard,
})

export const cssContentContainer = css({
  display: 'grid',
  gap: 32,
  [MQ[1]]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
  },
})

export const cssImgContainer = css({
  ...cssCard,
  position: 'relative',
  img: {
    borderRadius: 12,
    objectFit: 'contain',
    width: '100%',
  },
})

export const cssRating = css({
  ...cssCard,
  padding: '4px 8px',
  position: 'absolute',
  top: 24,
  left: 24,
  fontWeight: 800,
})

export const cssCollectionBtn = (isInCollection: boolean) =>
  css({
    backgroundColor: isInCollection ? COLOR.red : COLOR.blue,
    border: 'none',
    padding: 12,
    borderRadius: 100,
    color: 'white',
    cursor: 'pointer',
    width: '100%',
    marginTop: 12,
    fontSize: '1rem',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: isInCollection ? COLOR.darkRed : COLOR.darkBlue,
    },
  })

export const cssDetailCard = css({
  ...cssCard,
  h3: {
    color: COLOR.blue,
    margin: 0,
    marginBottom: 12,
    paddingBottom: 12,
    borderBottom: `solid 1px ${COLOR.blue}`,
  },
})

export const cssDetailContent = css({
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  paddingBottom: 12,
})

export const cssDetailCardContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
})
