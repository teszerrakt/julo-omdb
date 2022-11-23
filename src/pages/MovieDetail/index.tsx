import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'

const MovieDetail = () => {
  // const { id } = useParams<{ id: string }>()
  const id = 'tt0499448'
  const { data, error, loading } = useAxios({
    method: 'GET',
    // TODO: use .env to store apikey
    url: `http://www.omdbapi.com/?i=${id}&apikey=d314b6b5`,
  })

  if (loading) return <div>Loading ...</div>

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(error)}</pre>
    </div>
  )
}

export default MovieDetail
