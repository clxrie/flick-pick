import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Search from "./pages/Search"
import MovieDetail from "./pages/MovieDetail"
import Favorites from "./pages/Favourites"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App