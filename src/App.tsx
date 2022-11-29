import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import MovieList from './pages/MovieList'

function App() {
  return (
    <div>
      <Router>
        <div style={{ marginBottom: 32 * 4 }}>
          <Routes>
            <Route element={<MovieList />} path="/" />
            {/*<Route element={<MovieDetail />} path="/cakes/:id" />*/}
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
