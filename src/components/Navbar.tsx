import { NavLink } from "react-router"

function Navbar(){
    return(
        <nav>
            <NavLink
                to = "/"
                className={({isActive}) => isActive ? "text-red-500" : "text-gray-600"}>
                    Home
            </NavLink>
            <NavLink
                to = "/search"
                className={({isActive}) => isActive ? "text-red-500" : "text-gray-600"}>
                    Search
            </NavLink>
            <NavLink
                to = "/favorites"
                className={({isActive}) => isActive ? "text-red-500" : "text-gray-600"}>
                    Favorites
            </NavLink>
        </nav>
    )
}

export default Navbar