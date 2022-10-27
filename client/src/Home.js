import React from 'react'
import './home.css'
import Header from './Header'
import Footer from './Footer'
import './index.css'

const Home = () => {
  return (
   <>
   <h1>Welcome</h1>
    <div className='home'>
      <Header />
    </div>
    <Footer />
    </>
  )
}

export default Home