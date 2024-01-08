import MoviesList from "../components/MoviesList";



export default function Home() {
  return (
    <>
      <div className="bg-red-500" >
        <h1 className='bg-yellow-600'> Movies APP </h1>
        <MoviesList />
      </div>
    </>
  )
}
