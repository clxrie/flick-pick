import { NavLink } from "react-router"

function Navbar(){
    return(
        <nav>
            <NavLink
                to = "/"
                className={({isActive}) => isActive ? "bg-[#1d2951] text-white px-4 py-2 rounded" : 
                                                    "text-gray-300 px-4 py-2 rounded"}>
                    Home
            </NavLink>
            <NavLink
                to = "/search"
                className={({isActive}) => isActive ? "bg-[#1d2951] text-white px-4 py-2 rounded" : 
                                                    "text-gray-300 px-4 py-2 rounded"}>
                    Search
            </NavLink>
            <NavLink
                to = "/favorites"
                className={({isActive}) => isActive ? "bg-[#1d2951] text-white px-4 py-2 rounded" : 
                                                    "text-gray-300 px-4 py-2 rounded"}>
                    Favorites
            </NavLink>
        </nav>
    )
}

export default Navbar