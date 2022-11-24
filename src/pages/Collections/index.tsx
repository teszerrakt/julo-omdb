/** @jsxImportSource @emotion/react */
import Card from '../../components/Card'
import Empty from '../../components/EmptyState'
import useLocalStorage, { LS_KEY } from '../../hooks/useLocalStorage'
import { Collections } from '../../types'
import { cssMovieListContainer } from '../MovieList/style'
import { cssCollectionsPage } from './style'

const CollectionsPage = () => {
  const [collections] = useLocalStorage<Collections>(LS_KEY.COLLECTIONS, {})
  const movieList = Object.keys(collections).map(
    (movieId) => collections[movieId]
  )

  if (movieList.length === 0)
    return <Empty message="Your Collection is Empty" />

  return (
    <div css={cssCollectionsPage}>
      <div css={cssMovieListContainer}>
        {movieList.map((movie) => (
          <Card key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default CollectionsPage
