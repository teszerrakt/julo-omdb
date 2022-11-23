/** @jsxImportSource @emotion/react */
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { SearchResponse } from '../../types'
import {
  cssMovieListContainer,
  cssSearchBarContainer,
  cssContentContainer,
  cssSearchIcon,
} from './style'
import useDebounce from '../../hooks/useDebounce'
import { useAxios } from '../../hooks/useAxios'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import CardSkeleton from '../../components/Card/CardSkeleton'
import { skeletonList } from '../../constant'
import { BASE_URL } from '../../api'
import PaginationProvider, {
  PaginationContext,
} from '../../context/PaginationContext'

const MovieList = () => {
  const [query, setQuery] = useState('Avengers')
  const debouncedQuery = useDebounce(query)
  const { data, error, loading, refetch } = useAxios<SearchResponse>()
  const { currentPage, resetPagination } = useContext(PaginationContext)

  const movieList = data?.Search ?? []

  useEffect(() => {
    refetch({
      method: 'GET',
      url: `${BASE_URL}&s=${debouncedQuery}&page=${currentPage}`,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, currentPage])

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    resetPagination()
    setQuery(event.target.value)
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div css={cssMovieListContainer}>
          {skeletonList().map((key) => (
            <CardSkeleton key={key} />
          ))}
        </div>
      )
    }

    if (movieList.length === 0) {
      return <div>Empty State</div>
    }

    if (error) {
      return <div>{error}</div>
    }

    return (
      <>
        <div css={cssMovieListContainer}>
          {movieList.map((movie) => (
            <Card key={movie.imdbID} {...movie} />
          ))}
        </div>
        <Pagination totalData={parseInt(data?.totalResults ?? '0')} />
      </>
    )
  }

  return (
    <>
      <div css={cssSearchBarContainer}>
        <span css={cssSearchIcon}>🔍</span>
        <input value={query} onChange={handleQueryChange} />
      </div>
      <div css={cssContentContainer}>{renderContent()}</div>
    </>
  )
}

const MovieListWrapper = () => {
  return (
    <PaginationProvider>
      <MovieList />
    </PaginationProvider>
  )
}

export default MovieListWrapper
