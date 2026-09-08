import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Search from "./pages/Search"
import MovieDetail from "./pages/MovieDetail"
import Favorites from "./pages/Favourites"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path= "/home/:id" element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App