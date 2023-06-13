import Image from 'next/image'
import { formatDate, calculateDuration, formatDuration } from '@/utils/dates'

type HeaderProps = {
  result: any
}

const Header = ({ result }: HeaderProps) => {
  if (!result || !result?.stats)
    return <div className="flex items-center h-28 justify-center">loading</div>

  const floorPrice = Number(result?.stats?.floorPrice) / 1e18
  const formattedFloorPrice = (Math.abs(floorPrice) * 100).toFixed(0)
  const floorSign = floorPrice >= 0 ? '+' : '-'

  const volume24h = Number(result?.stats?.volume24h / 1e18).toFixed(0)
  const volume24hDelta = Number(
    (result?.stats?.volume24hDelta * 100).toFixed(0)
  )
  const volume24hDeltaSign = volume24hDelta >= 0 ? '+' : '-'

  const formattedDate = formatDate(result?.mintedAt)
  const { yearsAgo, monthsAgo } = calculateDuration(result?.mintedAt)
  const formattedString = formatDuration(yearsAgo, monthsAgo)

  const items = result?.stats?.items
  const marketCap = (floorPrice * items).toFixed(2)

  return (
    <div className="py-5 md:flex md:items-end md:space-y-10 md:space-x-3 md:pb-5 md:justify-between md:h-28">
      <div className="flex space-x-5 md:items-end md:space-x-3 ">
        <Image
          alt="nft1"
          src={result?.thumbnail}
          width={71}
          height={71}
          className="rounded-2xl "
        />

        <div className="flex items-center w-fit ">
          <div className="space-y-1 w-fit">
            <div className="flex  space-x-3">
              <p className="text-[20px] md:text-md font-bold">{result?.name}</p>
              {result?.verified && (
                <div className="relative w-5 h-5">
                  <Image alt="check" src="/check.png" fill sizes="w-5 h-5" />
                </div>
              )}
            </div>
            <div className="flex text-xs space-x-3 justify-between items-center md:pb-2">
              <p className="text-[16px]  md:text-sm font-bold ">Brand Name</p>
              <p className="text-center">•</p>

              <p className="text-[16px] w-fit	 text-uncommon-gray-600  flex items-center">
                <p>{formattedDate}</p>
                <p className="hidden md:inline-flex">{formattedString}</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 grid grid-cols-3 divide-x divide-uncommon-gray-900">
        <div className="px-2 md:px-5">
          <div className="">Floor</div>
          <div className="font-bold flex gap-1">
            <div>{result?.stats.floorPriceDelta.toFixed(2)}</div>
            <div className="text-uncommon-gray-600 text-sm items-center flex hover:text-uncommon-gray-800 ">
              {floorSign}
              {formattedFloorPrice}%
            </div>
          </div>
        </div>
        <div className="px-2 md:px-5">
          <div>24h Vol</div>
          <div className="flex gap-5">
            <div className="font-bold text-right">{volume24h}</div>
            <div className=" text-uncommon-gray-600 text-sm items-center flex hover:text-uncommon-gray-800 ">
              {volume24hDeltaSign}
              {Math.abs(volume24hDelta)}%
            </div>
          </div>
        </div>
        <div className="px-2 md:px-5">
          <div>Market Cap</div>
          <div className="font-bold md:text-right">{marketCap}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
