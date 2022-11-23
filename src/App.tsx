import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'
import MovieList from './pages/MovieList'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MovieList />} path="/" />
          <Route element={<MovieDetail />} path="/movie/:id" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
