import MoviesList from "../components/MoviesList";
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log('session', session)
  return (
    <>
      {session ? (
        <>
          <div className="p-4 flex flex-col items-center">
            <p className="text-xl font-bold mb-4">Welcome, {session.user.name}!</p>
            <MoviesList />
          </div>
          <button
            className="flex flex-col float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="p-4 flex flex-col items-center">
            <p className="text-xl mb-4">Login to display movies!</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn('google')}
            >
              Entrar com Google
            </button>
          </div>
        </>
      )}
      <MoviesList />
    </>
  )
}
