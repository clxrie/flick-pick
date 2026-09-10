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
        const saved = localStorage.getItem("favs");
        const currentFavs = saved ? JSON.parse(saved) : [];
        //I dont want the movie to be saved more than once so, 
        //.some() or .find() — they look through an array and check a condition on each item.
        if (currentFavs.some((fav: Movie) => fav.id === movieDatas.id)) return;
        currentFavs.push(movieDatas);
        localStorage.setItem("favs", JSON.stringify(currentFavs));
    }
    if (!movieDatas) return <p>Loading..</p>
        
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <h2>Movie ID: {id}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movieDatas.backdrop_path}`} className="w-full rounded"></img>
            <h1>{movieDatas.title}</h1>
            <p>{movieDatas.overview}</p>
            <p>{movieDatas.release_date}</p>
            <p>{movieDatas.genre_ids}</p>
            <p>{movieDatas.vote_average}</p>
            <button onClick={addtoFav}>Add to fav</button>
        </div>
    )
}

export default MovieDetails