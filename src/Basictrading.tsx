import React from 'react'
import Navbar from './Navbar';
import TradingLanding from './trading/TradingLanding';
const basictrading = () => {
  return (
    <>
    <div style={{margin:"0 1.5rem"}}>
    <Navbar/>
    <TradingLanding/>
    </div>
    </>
  )
}

export default basictrading