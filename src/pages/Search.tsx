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
    <div className="bg-gray-900 text-white min-h-screen">
        <input type="text"
               placeholder="🔍 Search movie..."
               value={searchInput}
               onChange={inputSearch}/>
        <button onClick={searchButton}>search</button>

        {results.map(result => (
            <MovieCard key={result.id} 
                          id={result.id}
                          title={result.title}
                          poster_path={result.poster_path}
                          vote_average={result.vote_average} />
        ))}

    </div>
    )
}

export default Search