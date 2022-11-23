/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { cssPaginationContainer } from './style'

interface IPaginationProps {
  currentPage: number
  totalData: number
  onNext: () => void
  onPrev: () => void
}

const DEFAULT_DATA_PER_PAGE = 10

const Pagination = ({
  currentPage,
  onNext,
  onPrev,
  totalData,
}: IPaginationProps) => {
  // TODO: save the count to context or create usePagination hooks
  const [count, setCount] = useState(DEFAULT_DATA_PER_PAGE)
  const isPrevDisabled = count <= 0 || currentPage === 1
  const isNextDisabled = count >= totalData

  useEffect(() => {
    console.log('count', count)
  })

  const handlePrev = () => {
    setCount((value) => value - DEFAULT_DATA_PER_PAGE)
    scrollToTop()
    onPrev()
  }

  const handleNext = () => {
    setCount((value) => value + DEFAULT_DATA_PER_PAGE)
    scrollToTop()
    onNext()
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div css={cssPaginationContainer}>
      <button onClick={handlePrev} disabled={isPrevDisabled}>
        Prev
      </button>
      {currentPage}
      <button onClick={handleNext} disabled={isNextDisabled}>
        Next
      </button>
    </div>
  )
}

export default Pagination
