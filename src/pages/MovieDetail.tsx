import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Movie } from "../types/movie"


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

    

    if (!movieDatas) return <p>Loading..</p>
        
    return (
        <div>
            <h2>Movie ID: {id}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movieDatas.backdrop_path}`}></img>
            <h1>{movieDatas.title}</h1>
            <p>{movieDatas.overview}</p>
            <p>{movieDatas.release_date}</p>
            <p>{movieDatas.genre_ids}</p>
            <p>{movieDatas.vote_average}</p>
        </div>
    )
}

export default MovieDetails