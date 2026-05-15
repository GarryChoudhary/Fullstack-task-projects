import React from 'react'
import { useContext, useState } from 'react'
import shoesData from '../ShoesData'
import Shoes from '../components/Shoes'
import { CartContext } from '../context/CartContext'
import Cart from '../components/Cart'

function Home() {
      const { total } = useContext(CartContext)
      const { cart } = useContext(CartContext)
      const { increaseQyt } = useContext(CartContext)
      const { decreaseQyt } = useContext(CartContext)
  return (
    <div>
      
      <div className="main-container">
        <div className="items">
          {
            shoesData.map((shoe) => (
              <Shoes shoe={shoe} />
            ))
          }
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Home
