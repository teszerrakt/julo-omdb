import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

interface UseAxiosReturnType<T> {
  loading: boolean
  data: T | undefined
  error: string
  refetch: (refetchConfig: AxiosRequestConfig<any>) => void
}

export const useAxios = <ResponseData>(
  config?: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): UseAxiosReturnType<ResponseData> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ResponseData>()
  const [error, setError] = useState('')

  const refetch = (refetchConfig: AxiosRequestConfig<any>) => {
    sendRequest(refetchConfig)
  }

  const sendRequest = (config: AxiosRequestConfig<any>) => {
    setLoading(true)

    axios(config)
      .then((response) => {
        setError('')
        setData(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (loadOnStart && config) sendRequest(config)
    else setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadOnStart])

  return { loading, data, error, refetch }
}
