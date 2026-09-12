import { NavLink } from "react-router"

function Navbar(){
    return(
        <nav className="flex w-full">
            <NavLink
                to = "/"
                className={({isActive}) => isActive ? "flex-1 text-center bg-[#1d2951] text-white py-3"  : 
                                                    "flex-1 text-center bg-gray-200 text-gray-600 py-3"}>
                    Home
            </NavLink>
            <NavLink
                to = "/search"
                className={({isActive}) => isActive ? "flex-1 text-center bg-[#1d2951] text-white py-3" : 
                                                    "flex-1 text-center bg-gray-200 text-gray-600 py-3"}>
                    Search
            </NavLink>
            <NavLink
                to = "/favorites"
                className={({isActive}) => isActive ? "flex-1 text-center bg-[#1d2951] text-white py-3" : 
                                                    "flex-1 text-center bg-gray-200 text-gray-600 py-3"}>
                    Favorites
            </NavLink>
        </nav>
    )
}

export default Navbar