import './App.css'
import { Main, Header, Burger, Aside, Soup, Dessert } from './Components'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <article>
      <Router>
        <Routes>
          <Route exact path='/Burgers' element={<Burger />} />
          <Route exact path='/Dessert' element={<Dessert />} />
          <Route exact path='/Soup' element={<Soup />} />
          <Route exact path='/' element={<Main />} />
        </Routes>

        
          <Aside />
        </Router>
      </article>
    </>
  )
}

export default App
