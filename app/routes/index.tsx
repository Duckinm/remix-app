import type { LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export let loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎' }
}

export default function Index() {
  let data = useLoaderData()

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-200">
      <h2>Welcome to Remix!</h2>
    </div>
  )
}
