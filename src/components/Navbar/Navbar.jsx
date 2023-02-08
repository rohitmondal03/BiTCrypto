import React from 'react'

import './Navbar.css'
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import coinImg from '../img/coin_front.png';

AOS.init();

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='navbar-content'>
        <h1 className='animate__animated animate__slideInDown'>BiTCrypto</h1>
        <p className='animate__animated animate__slideInUp'>One place to get to know about all crypto's price trending around.</p>
        <p className='animate__animated animate__slideInUp'>Let's get started...!!!</p>
      </div>

      <div className='navbar-logo'>
        <img className='animate__animated animate__fadeIn' src={coinImg} />
      </div>

    </div>
  )
}

export default Navbar