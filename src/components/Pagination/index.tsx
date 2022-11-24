/** @jsxImportSource @emotion/react */
import { useContext } from 'react'
import { PaginationContext } from '../../context/PaginationContext'
import { cssPaginationContainer } from './style'

interface IPaginationProps {
  totalData: number
}

const Pagination = ({ totalData }: IPaginationProps) => {
  const { currentPage, count, handleNext, handlePrev } =
    useContext(PaginationContext)
  const isPrevDisabled = count <= 0 || currentPage === 1
  const isNextDisabled = count >= totalData

  return (
    <div css={cssPaginationContainer}>
      <button onClick={handlePrev} disabled={isPrevDisabled}>
        ◀︎ Prev
      </button>
      {currentPage}
      <button onClick={handleNext} disabled={isNextDisabled}>
        Next ▶︎
      </button>
    </div>
  )
}

export default Pagination
