import React, { useState } from 'react'

import "./CryptoPrices.css";

const CryptoPrices = (props) => {

  return (
    <div className='crypto_prices'>

      <div className='crypto_prices-left'>
        <p>{props.serial}</p>
        <img src={props.ph} />
        <p>{props.name}</p>
      </div>

      <div className='crypto_prices-right'>
        <p>{props.price}</p>
        <p>{props.marketCap}</p>
      </div>

    </div>
  )
}

export default CryptoPrices