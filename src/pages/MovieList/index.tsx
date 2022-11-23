/** @jsxImportSource @emotion/react */
import { ChangeEvent, useEffect, useState } from 'react'
import { SearchResponse } from '../../types'
import {
  cssMovieListContainer,
  cssSearchBarContainer,
  cssContentContainer,
} from './style'
import useDebounce from '../../hooks/useDebounce'
import { useAxios } from '../../hooks/useAxios'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'

const MovieList = () => {
  const [query, setQuery] = useState('Narnia')
  const debouncedQuery = useDebounce(query)
  const { data, error, loading, refetch } = useAxios<SearchResponse>()
  const [currentPage, setCurrentPage] = useState(1)

  const movieList = data?.Search ?? []

  useEffect(() => {
    refetch({
      method: 'GET',
      // TODO: use .env to store apikey
      url: `http://www.omdbapi.com/?s=${debouncedQuery}&apikey=d314b6b5&page=${currentPage}`,
    })
  }, [debouncedQuery, currentPage])

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1)
    setQuery(event.target.value)
  }

  const renderContent = () => {
    if (loading) {
      return <div>Loading ...</div>
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
            // set isLoading according to fetch
            <Card key={movie.imdbID} isLoading={false} {...movie} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrev={() => setCurrentPage(currentPage - 1)}
          totalData={parseInt(data?.totalResults ?? '0')}
        />
      </>
    )
  }

  return (
    <>
      <div css={cssSearchBarContainer}>
        <input value={query} onChange={handleQueryChange} />
      </div>
      <div css={cssContentContainer}>{renderContent()}</div>
    </>
  )
}

export default MovieList
