import { Link, MetaFunction } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center h-screen gap-4 ">
        <h1 className="text-2xl italic">Welcome to Remix!</h1>
        <Link to="/" className="underline cursor-pointer">
          Home page
        </Link>
      </div>
    </div>
  )
}
