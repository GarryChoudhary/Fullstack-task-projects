import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './Cart.css'
import { useNavigate } from "react-router-dom";


function Cart() {
const navigate = useNavigate();


const {cart} =useContext(CartContext)
const {total} =useContext(CartContext)
const {decreaseQyt} =useContext(CartContext)
const {increaseQyt} =useContext(CartContext)


  return (
    <div>
       <div >
          <div className='cart'>
            <h3>Cart</h3>
            <div className="cartitems">
              {cart.length === 0 && <p>No items</p>}

              {cart.map((item, index) => (
                <div key={index} className='cartcards'>
                  <img src={item.image} alt={item.imageDesc} width="80" />
                  <div>{item.imageDesc}

                    <p>Price : ${item.price}</p>
                  </div>

                  <p><button id='QytDecrease' onClick={() => decreaseQyt(item.id)}>-</button> {item.quantity}<button id='QytIncrease' onClick={() => increaseQyt(item.id)}>+</button>
                  </p>
    

                </div>
                  
              ))}
              

            </div>

            <h3 id='total'>Total  : ${total} </h3>
            <button onClick={() => navigate("/payment")} id='Button'>Proceed to Payment</button>
          </div>
        </div>
    </div>
  )
}

export default Cart
