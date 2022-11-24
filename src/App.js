import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import Movie from "./components/movies/Movie";
import MoviesEditForm from "./components/movies/MoviesEditForm";
import MoviesIndex from "./components/movies/MoviesIndex";
import MoviesNewForm from "./components/movies/MoviesNewForm";


function App() {

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MoviesIndex />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/movie/new" element={<MoviesNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
          <Route path="/movie/:id/edit" element={<MoviesEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
