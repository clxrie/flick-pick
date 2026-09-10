import { useEffect, useState } from "react"
import type { Movie } from "../types/movie";

function Favourites(){

    const[favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(favorites));
    }, [favorites]);

    function removeFav(idToRemove : number){
        const newFavs = favorites.filter((fav:Movie) => fav.id !== idToRemove );
        setFavorites(newFavs);
    }
    
    return (
        <div>
            <h1> favs</h1>
            {favorites.map((favorite: any) => (
                <div>
                    <p key = {favorite.id}>{favorite.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${favorite.backdrop_path}`}></img>
                    <h1>{favorite.title}</h1>
                    <p>{favorite.overview}</p>
                    <p>{favorite.release_date}</p>
                    <p>{favorite.genre_ids}</p>
                    <p>{favorite.vote_average}</p>
                    <button onClick={() => removeFav(favorite.id)}>Remove from fav</button>
                </div>
            ))}
        </div>
    )
}

export default Favourites