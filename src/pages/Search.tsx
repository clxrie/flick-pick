import { useState } from "react"
import type { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";

/*has an input field, fetches movies matching what the user types, 
    shows results as cards */
function Search(){
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] =useState<Movie[]>([])
    const API_KEY = "bfe36a1f4e4177b2dcd260993ace42ca";
    const BASE_URL = "https://api.themoviedb.org/3";

    function inputSearch(event: React.ChangeEvent<HTMLInputElement>){
            setSearchInput(event.target.value);
        }
     
    async function searchButton(){
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchInput}`
        );
        const data = await response.json();
        setResults(data.results);     
    }
    


    return (
    <div className="bg-gray-900 text-white min-h-screen ">
        <input className="bg-gray-800 text-white mt-4 px-5 py-2 rounded w-64"
               type="text"
               placeholder="🔍 Search movie..."
               value={searchInput}
               onChange={inputSearch}/>
        <button className="bg-white text-black mt-4 px-4 py-2 rounded ml-2"
                onClick={searchButton}>
                        Search
        </button>
        {results.length === 0 && (
  <p className="text-gray-500 text-center mt-10">Search for a movie to get started</p>
)}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {results.map(result => (
                <MovieCard key={result.id} 
                           id={result.id}
                           title={result.title}
                           poster_path={result.poster_path}
                           vote_average={result.vote_average} 
                           vote_count={result.vote_count}/>
                           
        ))}
    </div>
    </div>
    )
}

export default Search