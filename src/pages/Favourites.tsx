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
        <div className="bg-gray-900 text-white max-w-4xl mx-auto p-4">
            {favorites.map((favorite: any) => (
                <div className="bg-gray-900 text-white max-w-4xl mx-auto p-4">
                    <p key = {favorite.id} className="text-2xl font-cold mt-4 uppercase">{favorite.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${favorite.backdrop_path}`}></img>
                    <p className="text-gray-400 mt-2 italic">{favorite.overview}</p>
                    <p className="mt-1 text-sm text-gray-400 italic">{new Date(favorite.release_date).toLocaleDateString("en-US",{
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric"
                    })}</p>
                    <p>{favorite.genre_ids}</p>
                    <p className="mt-2"> ⭐ {favorite.vote_average.toFixed(1)}</p>
                    <button className="bg-white text-red-500 px-4 py-2 rounded mt-4 flex items-center gap-2"
                            onClick={() => removeFav(favorite.id)}>
                             <svg className="h-5 w-5 fill-current stroke-current" xmlns="http://w3.org" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>    
                            Remove from fav
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Favourites