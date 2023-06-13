'use client'

import { ReactNode } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { DataProvider } from '../context/data'
import { SortProvider } from '../context/sort'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <DataProvider>
          <SortProvider>{children}</SortProvider>
        </DataProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
