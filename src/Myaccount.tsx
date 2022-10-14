import React from 'react'
import Navbar from './Navbar';
import MyAccountLanding from './myaccount/MyAccountLanding';
const myaccount = () => {
  return (
    <>
    <div style={{margin:"0 1.5rem"}}>
<Navbar/>
    <MyAccountLanding/> 
    </div>
    
    </>
  )
}

export default myaccount