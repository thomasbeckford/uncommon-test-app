import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Uncommon Test!</h1>
        <div className="mt-10">
          Check out the{' '}
          <Link className="text-blue-500" href="/collections">
            /collections
          </Link>{' '}
          page to get started.
        </div>
      </div>
    </div>
  )
}
