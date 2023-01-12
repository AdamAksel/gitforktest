import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <>
      <aside>
        <nav>
          <Link to='/Burgers'>Burgers</Link>
          <Link to='/Soup'>Soup</Link>
          <Link to='/Dessert'>Dessert</Link>
          <Link to='/Dessert1'>Dessert1</Link>
        </nav>
      </aside>
    </>
  )
}

export default Aside

//Comment now with extra text to try out gitthingy