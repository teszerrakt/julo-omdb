/** @jsxImportSource @emotion/react */
import Card from '../../components/Card'
import useLocalStorage, { LS_KEY } from '../../hooks/useLocalStorage'
import { Collections } from '../../types'
import { cssMovieListContainer } from '../MovieList/style'
import { cssCollectionsPage } from './style'

const CollectionsPage = () => {
  const [collections] = useLocalStorage<Collections>(LS_KEY.COLLECTIONS, {})
  const movieList = Object.keys(collections).map(
    (movieId) => collections[movieId]
  )

  return (
    <div css={cssCollectionsPage}>
      <div css={cssMovieListContainer}>
        {movieList.map((movie) => (
          // set isLoading according to fetch
          <Card key={movie.imdbID} isLoading={false} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default CollectionsPage
