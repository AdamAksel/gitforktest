import React from 'react'
import { data } from '../data'

const Dessert = () => {
  return (
    <>
    <section id="blueberry-pie">
        <div className="image">
        </div>
        <div className="text">
          <h2>{data.dessert.title}</h2>
          <div className="icons">
            <div>
              <i className="fas fa-stroopwafel"></i>
              <i className="fas fa-utensils"></i>
            </div>
            <div>
              <i className="fas fa-dollar-sign"></i>
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <p>{data.dessert.content}</p>
        </div>
      </section>
    </>
  )
}

export default Dessert