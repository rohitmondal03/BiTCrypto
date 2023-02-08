import React from 'react'

import CryptoPrices from './CryptoPrices/CryptoPrices'
import Data from "./CryptoPrices/Data"

import "./Crypto.css"

const Crypto = () => {

  const dataComp = Data.map((data) => {
    return (
      <CryptoPrices
        serial={data.id}
        ph={data.ph}
        name={data.name}
        price={data.price}
        change={data.change}
        vol={data.vol}
        marketCap={data.marketCap}
      />
    )
  })

  return (
    <div className='crypto'>

      <div className='crypto-headings'>
        <h1>Let's get to the point</h1>
        <h2>Crypto prices</h2>

        <div className='crypto-prices'>

          <div className='crypto-abt'>
            <div className='crypto-prices-left'>
              <h4>Name</h4>
            </div>

            <div className='crypto-prices-right'>
              <h4>Price</h4>
              <h4>Market Cap</h4>
            </div>
          </div>

          {/* <CryptoPrices 
                ph={BitCoinImg} 
                name="Bitcoin" 
                price="$23,113.73" 
                change="+0.47%" 
                vol="$24.23 B"
                marketCap="$444.27 B" 
              /> */}

          {dataComp}

        </div>

      </div>

    </div>
  )
}

export default Crypto