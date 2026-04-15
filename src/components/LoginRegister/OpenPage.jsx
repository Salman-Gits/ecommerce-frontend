import React, { useEffect } from 'react'
import './OpenPage.css'
import open from './open.jpg'
import { Link } from 'react-router-dom'

export const OpenPage = () => {
  useEffect(()=>{
    document.body.style.backgroundImage=`url(${open})`
  },[])
  return (
    <div style={
      {position:"relative",height:"100vh",width:"100vw"}
      }>
       <h4 style={
      {position:"absolute",top:"360px",left:"220px"}
      }>
         <span className='Click'>click here to </span>
         <Link to="/login"> <button class="button"><span>Continue </span></button></Link>
        </h4>
    </div>
  )
}
export default OpenPage;