import { Link } from "react-router"

function MovieCard({ title, poster_path, vote_average, id }: { title: string, poster_path: string, vote_average: number, id: number }){
    return (
            <Link to={`/movie/${id}`}>
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
                    <h2>{title}</h2>
                    <p>Rating : ⭐ {vote_average}</p>
                </div>
            </Link>
    )
}

export default MovieCard