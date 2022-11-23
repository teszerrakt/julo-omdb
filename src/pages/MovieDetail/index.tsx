/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import useLocalStorage, { LS_KEY } from '../../hooks/useLocalStorage'
import { Collections, MovieDetailResponse } from '../../types'
import { capitalize } from '../../utils'
import {
  cssCollectionBtn,
  cssContentContainer,
  cssDetailCard,
  cssDetailCardContainer,
  cssDetailContent,
  cssHeader,
  cssImgContainer,
  cssMovieDetailContainer,
  cssRating,
} from './style'

const MovieDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { data, error, loading } = useAxios<MovieDetailResponse>({
    method: 'GET',
    // TODO: use .env to store apikey
    url: `http://www.omdbapi.com/?i=${id}&apikey=d314b6b5`,
  })
  const [collections, setCollections] = useLocalStorage<Collections>(
    LS_KEY.COLLECTIONS,
    {}
  )

  if (loading) return <div>Loading ...</div>

  if (error || !data) return <div>{error || 'Some Error Happenend'}</div>

  const isInCollection = Boolean(collections[id!])

  const { Title, Plot, Poster, imdbRating } = data

  const detailKeys: Partial<keyof MovieDetailResponse>[] = [
    'Type',
    'Year',
    'Genre',
    'Language',
    'Runtime',
    'Director',
    'Rated',
  ]

  const handleClickBack = () => {
    navigate('/')
  }

  const handleAddToCollections = () => {
    setCollections((prevState) => ({ ...prevState, [id!]: data }))
  }

  const handleRemoveFromCollections = () => {
    setCollections((prevState) => {
      const copy = { ...prevState }
      delete copy[id!]
      return copy
    })
  }

  return (
    <div css={cssMovieDetailContainer}>
      <header css={cssHeader}>
        <button onClick={handleClickBack}>◀︎</button>
        <h1>{Title}</h1>
      </header>
      <div css={cssContentContainer}>
        <div css={cssImgContainer}>
          <img src={Poster} alt={`${Title} poster`} />
          <span css={cssRating}>★ {imdbRating}</span>
          <button
            css={cssCollectionBtn(isInCollection)}
            onClick={
              isInCollection
                ? handleRemoveFromCollections
                : handleAddToCollections
            }
          >
            {isInCollection
              ? '𝗫 Remove From Collections'
              : '✚ Add To Collections'}
          </button>
        </div>
        <div css={cssDetailCardContainer}>
          <div css={cssDetailCard}>
            <h3>Details</h3>
            <div>
              {detailKeys.map((key) => (
                <div css={cssDetailContent} key={key}>
                  <b>{key}</b>
                  {capitalize(data[key] as string)}
                </div>
              ))}
            </div>
          </div>
          <div css={cssDetailCard}>
            <h3>Plot</h3>
            <div>{Plot}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
