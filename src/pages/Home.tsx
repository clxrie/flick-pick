import { useState , useEffect} from "react"
import type { Movie } from "../types/movie"
import MovieCard from "../components/MovieCard";


function Home(){
     const[movies, setMovies] = useState<Movie[]>([]);
     const API_KEY = "bfe36a1f4e4177b2dcd260993ace42ca";
     const BASE_URL = "https://api.themoviedb.org/3";

    async function fetchMovies(){
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);        
    }
    
    useEffect(() => {
        fetchMovies()
    }, [])
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {/* displaying items as cards ,means taking the movie data (like the poster, title, and release date) and visual-exploration organizing it into a self-contained, rectangular UI component that looks like a physical card. */}
            {movies.map(movie => (
               <MovieCard key={movie.id} 
                          id={movie.id}
                          title={movie.title}
                          poster_path={movie.poster_path}
                          vote_average={movie.vote_average} />
            ))}

        </div>
    );
}

export default Home