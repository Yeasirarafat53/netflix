import './App.css';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import MovieList from './components/Movielist/MovieList';
import Footer from './components/Footer/Footer';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
