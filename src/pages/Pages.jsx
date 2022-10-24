import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'

const Pages = ({productItems, addToCart, cartItem}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart = {addToCart} />
    </>
  )
}

export default Pages
