import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Collections from './pages/Collections'
import MovieDetail from './pages/MovieDetail'
import MovieList from './pages/MovieList'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div style={{ marginBottom: 80 }}>
          <Routes>
            <Route element={<MovieList />} path="/" />
            <Route element={<MovieDetail />} path="/movie/:id" />
            <Route element={<Collections />} path="/collections" />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
