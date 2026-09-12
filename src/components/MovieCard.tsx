import { Link } from "react-router"

function MovieCard({ title, poster_path, vote_average, id, vote_count }: { title: string, poster_path: string, vote_average: number, id: number, vote_count: number }){
    return (
            <Link to={`/movie/${id}`}>
                <div className="bg-gray-200 text-black rounded">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full rounded"></img>
                    <h2 className="text-center">{title}</h2>
                    <p className="text-center">Rating : ⭐ {vote_average.toFixed(1)} ({vote_count})</p>
                </div>
            </Link>
    )
}

export default MovieCard