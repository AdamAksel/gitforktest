import React from 'react'
import { data } from '../data'

const Main = () => {
  return (
    <>
      
        <div className='intro text'>
          <h2>{data.main.title}</h2>
          <div className='icons'>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </div>
          <p>
           {data.main.content}
          </p>
        </div>
      
    </>
  )
}

export default Main
