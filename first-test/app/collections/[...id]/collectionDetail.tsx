'use client'

import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { DataContext } from '@/context/data'
import { Spinner } from '@chakra-ui/react'
import { SortContext } from '@/context/sort'

type CollectionDetailPageProps = {
  collectionId: string
}

const CollectionDetailPage = (props: CollectionDetailPageProps) => {
  const { sortBy } = useContext(SortContext)
  const { collectionId } = props
  const {
    collectionDetailData,
    collectionDetailError,
    collectionDetailLoading,
    setCollectionId,
  } = useContext(DataContext)

  useEffect(() => {
    setCollectionId(collectionId)

    return () => {
      setCollectionId(null)
    }
  }, [collectionId])

  const results = collectionDetailData?.results

  if (collectionDetailLoading)
    return (
      <div className="flex items-center h-28 justify-center">
        <Spinner />
      </div>
    )

  if (collectionDetailError)
    return <div>Error trying to get collection detail...</div>

  if (!results) return <div>No results</div>
  const arrayNames = Object.keys(results)
  console.log(results)
  return (
    <div>
      {arrayNames.map((arrayName) =>
        results[arrayName]
          .sort((a: any, b: any) => {
            if (sortBy === 'traitFloor') {
              return b.traitFloor.price - a.traitFloor.price
            } else if (sortBy === 'topOffer') {
              return b.topOffer.price - a.topOffer.price
            } else if (sortBy === 'traitRarity') {
              return a.count - b.count
            }
          })
          .map((item: any) => (
            <div
              key={`${item.count}-${item.value}`}
              className="bg-background-black flex items-center space-x-3 p-4 rounded even:bg-[#ffffff14]  w-full"
            >
              <Image
                alt="thumbnail"
                src={item.thumbnail}
                width={71}
                height={71}
                className="rounded-md "
              />

              <div className="space-y-2 justify-between w-full md:justify-normal md:space-y-0 md:flex md:space-x-4">
                <div className="flex-none ">
                  <p className="text-uncommon-gray-600 text-sm ">{arrayName}</p>
                  <p className="font-bold">{item.value}</p>
                </div>

                <div className="flex w-full place-items-end">
                  <div className="flex-1 ">
                    <p className="text-uncommon-gray-600 text-sm">
                      Trait floor
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/opensea.svg"
                        alt="opensea"
                        width={20}
                        height={20}
                      />
                      <p className="font-bold">
                        {(Number(item.traitFloor.price) / 1e18).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-uncommon-gray-600 text-sm">Top offer</p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/opensea.svg"
                        alt="opensea"
                        width={20}
                        height={20}
                      />
                      <p className="font-bold">
                        {(Number(item.topOffer.price) / 1e18).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right ">
                    <p className="text-uncommon-gray-600 text-sm ">Items</p>
                    <div className="flex space-x-2 ">
                      <p className="font-bold ">{item.count}</p>
                      <p className="text-uncommon-gray-600 text-xs self-end mb-0.5">
                        20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  )
}

export default CollectionDetailPage
