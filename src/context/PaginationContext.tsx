import { createContext, ReactNode, useState } from 'react'

interface IPaginationContext {
  currentPage: number
  count: number
  resetPagination: () => void
  handleNext: () => void
  handlePrev: () => void
}

interface IPaginationContextProps {
  children: ReactNode
}

const DEFAULT_DATA_PER_PAGE = 10

export const PaginationContext = createContext<IPaginationContext>({
  currentPage: 1,
  count: DEFAULT_DATA_PER_PAGE,
  resetPagination: () => {},
  handleNext: () => {},
  handlePrev: () => {},
})

const PaginationProvider = ({ children }: IPaginationContextProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(DEFAULT_DATA_PER_PAGE)

  const handlePrev = () => {
    setCurrentPage((value) => value - 1)
    setCount((value) => value - DEFAULT_DATA_PER_PAGE)
    scrollToTop()
  }

  const handleNext = () => {
    setCurrentPage((value) => value + 1)
    setCount((value) => value + DEFAULT_DATA_PER_PAGE)
    scrollToTop()
  }

  const resetPagination = () => {
    setCount(DEFAULT_DATA_PER_PAGE)
    setCurrentPage(1)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        count,
        resetPagination,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
