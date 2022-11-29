/** @jsxImportSource @emotion/react */
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CakeList } from '../../types'
import {
  cssMovieListContainer,
  cssContentContainer,
} from './style'
import { useAxios } from '../../hooks/useAxios'
import { BASE_URL } from '../../api'
import { jsx } from '@emotion/react'
import Empty from '../../components/EmptyState'
import Card from '../../components/Card'

const MovieList = () => {
  const { data, error, loading, refetch } = useAxios<any>()
  const [page, setPage] = useState(1)

  useEffect(() => {
    refetch({
      method: 'GET',
      url: `${BASE_URL}/cakes?${page}`,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (data !== undefined && data.data.items.length !== 0) {
    const cakeList = data.data.items as any[]
    return (
      <div css={cssContentContainer}>
        <div css={cssMovieListContainer}>
        {cakeList.map(cake => (
          <Card key={cake.id} {...cake}/>
        ))}
        </div>
      </div>
    )
  } else return null
}

export default MovieList
