import Header from '../../../components/Header'
import CollectionDetailPage from './collectionDetail'
import Select from '../../../components/Select'

interface Props {
  params: {
    id: string
  }
}
interface CollectionData {
  name: string
  description: string
  coverImage: string
  stats?: {
    items: number
  }
}

export async function generateMetadata({ params }: Props) {
  const collectionId = params.id[0]
  const data = await fetchCollectionById(collectionId)
  return {
    title: data.name,
    image: data.coverImage,
  }
}

async function fetchCollectionById(id: string): Promise<CollectionData> {
  if (!id) throw new Error('Collection ID is required.')
  const res = await fetch(
    `https://uncommon-code-tests.herokuapp.com/collections/${id}`,
    { next: { revalidate: 30 } }
  )
  const data = await res.json()

  if (!data.result) throw new Error('Unexpected response from API.')
  return data.result
}

export default async function Collection(props: Props) {
  const { params } = props
  const collectionId = params.id[0]
  const data = await fetchCollectionById(collectionId)
  const uniqueTraitsCategoriesCount = Object.keys(data).length
  const uniqueTraitsCount = data.stats?.items

  return (
    <main className="mx-2 ">
      <Header result={data} />
      <hr />

      <div className=" w-fit-content md:4/5 lg:w-3/5 xl:w-2/5">
        <div className="flex justify-between items-center pt-10">
          <h2 className="font-bold text-3xl">Top traits</h2>

          <Select />
        </div>

        <p className="mt-5">
          The Collection Name NFT collection has{' '}
          <span className="font-bold">{uniqueTraitsCount} unique traits</span>{' '}
          among{' '}
          <span className="font-bold">
            {uniqueTraitsCategoriesCount} trait categories
          </span>
          .
        </p>

        <CollectionDetailPage collectionId={collectionId} />
      </div>
    </main>
  )
}
