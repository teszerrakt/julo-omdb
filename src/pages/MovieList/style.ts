import { COLOR, MQ } from './../../constant'
import { css } from '@emotion/react'

export const cssMovieListContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr));',
  gap: 32,
  marginBottom: 32,
  [MQ[0]]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
  },
})

export const cssSearchBarContainer = css({
  position: 'relative',
  margin: '32px 32px 16px 32px',
  padding: 16,
  display: 'flex',
  backgroundColor: COLOR.grayBlue,
  border: `solid 1px ${COLOR.blue}`,
  borderRadius: 16,
  input: {
    padding: 12,
    borderRadius: 999,
    border: `solid 1px ${COLOR.blue}`,
    backgroundColor: COLOR.darkBlue,
    color: COLOR.blue,
    outline: 'none',
    width: '100%',
  },
})

export const cssSearchIcon = css({
  position: 'absolute',
  top: '37.5%',
  right: 37.5,
})

export const cssContentContainer = css({
  padding: 32,
})
