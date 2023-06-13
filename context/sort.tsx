import { ReactNode, createContext, useState } from 'react'

type SortContextType = {
  sortBy: string
  setSortBy: (sortBy: string) => void
}

const SortContext = createContext<SortContextType>({
  sortBy: 'traitFloor',
  setSortBy: () => {},
})

const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortBy, setSortBy] = useState('traitFloor')

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortContext.Provider>
  )
}

export { SortContext, SortProvider }
