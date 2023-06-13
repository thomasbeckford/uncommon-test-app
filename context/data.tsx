'use client'

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

type CollectionStateType = {
  setCollectionId: Dispatch<SetStateAction<any>>
  collectionId: string | null
}

type CollectionDetailData = {
  results: any
}

type DataContextDetailType = {
  collectionDetailData: CollectionDetailData | undefined
  collectionDetailError: Error | null | undefined
  collectionDetailLoading: boolean
}

const DataContext = createContext<DataContextDetailType & CollectionStateType>({
  collectionDetailData: undefined,
  collectionDetailError: null,
  collectionDetailLoading: false,
  collectionId: null,
  setCollectionId: () => {},
})

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [collectionId, setCollectionId] = useState(null)

  console.log(
    'LOG: DataProvider => Fetching data from collection id',
    collectionId
  )

  const {
    data: collectionDetailData,
    error: collectionDetailError,
    isLoading: collectionDetailLoading,
  } = useSWR<CollectionDetailData, Error>(
    collectionId
      ? `https://uncommon-code-tests.herokuapp.com/collections/${collectionId}/traits`
      : null,
    fetcher,
    {
      refreshInterval: 30000,
    }
  )

  return (
    <DataContext.Provider
      value={{
        collectionDetailData,
        collectionDetailError,
        collectionDetailLoading,
        setCollectionId,
        collectionId,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
