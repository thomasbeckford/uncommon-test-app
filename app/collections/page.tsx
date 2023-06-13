'use client'
import { Button, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { DataContext } from '@/context/data'

export default function Collections() {
  const router = useRouter()
  const { setCollectionId } = useContext(DataContext)

  const handleGoToCollection = (collectionId: string) => {
    setCollectionId(collectionId)
    router.push(`/collections/${collectionId}`)
  }

  const collections = ['0x123']

  return (
    <div className="h-screen flex items-center justify-center">
      <SimpleGrid columns={1} spacing={10}>
        {collections.map((collection) => (
          <Button
            key={collection}
            variant="outline"
            onClick={() => handleGoToCollection(collection)}
          >
            Go to collection {collection}
          </Button>
        ))}
      </SimpleGrid>
    </div>
  )
}
