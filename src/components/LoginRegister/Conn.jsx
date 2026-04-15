import React from 'react'
import Home from './Home'
import Product from './Product'
import Headers from './Headers'
import AboutPage from './AboutPage'

export const Conn= () => {
  return (
    <div >
    <Headers/>
     <Home/>
     <Product/>
     <AboutPage/>
    </div>
  )
}
export default Conn;