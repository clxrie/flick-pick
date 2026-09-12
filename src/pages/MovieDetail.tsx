import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Movie } from "../types/movie";


function MovieDetails(){
    const { id } = useParams();
    const [movieDatas, setMovieDatas] = useState<Movie | null>(null);
    const API_KEY = "bfe36a1f4e4177b2dcd260993ace42ca";
    const BASE_URL = "https://api.themoviedb.org/3";

    useEffect(() =>{
        const fetchData = async() => {
            const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            setMovieDatas(data);
        }

        fetchData();
    }, [id]);

    function addtoFav(){
    if (!movieDatas) return;
     //I dont want the movie to be saved more than once so, 
        //.some() or .find() — they look through an array and check a condition on each item.
    const saved = localStorage.getItem("favs");
    const currentFavs = saved ? JSON.parse(saved) : [];
    if (currentFavs.some((fav: Movie) => fav.id === movieDatas.id)) return;
    currentFavs.push(movieDatas);
    localStorage.setItem("favs", JSON.stringify(currentFavs));
}
    
    if (!movieDatas) return <p>Loading..</p>
        
    return (
        <div className="bg-gray-900 text-white max-w-4xl mx-auto p-4">
            <img src={`https://image.tmdb.org/t/p/w500${movieDatas.backdrop_path}`} 
                 className="w-full rounded-lg"></img>
            <h1 className="text-2xl font-cold mt-4 uppercase">{movieDatas.title}</h1>
            <p className="text-gray-400 mt-2">{movieDatas.overview}</p>
            <p className="mt-2"> ⭐ {movieDatas.vote_average.toFixed(1)}</p>
            <p className="mt-1 text-sm text-gray-400 italic">{new Date(movieDatas.release_date).toLocaleDateString("en-US",{
                year:"numeric",
                month:"long",
                day:"numeric"
            })}</p>
            
            <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 flex items-center gap-2"
                    onClick={addtoFav}>
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 transition-colors duration-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>Add to fav
            </button>
        </div>
    )
}

export default MovieDetails