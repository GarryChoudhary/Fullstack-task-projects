import React from 'react'
import './Payment.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from "react-router-dom";


function Payment() {
    const navigate = useNavigate();

    const { cart } = useContext(CartContext)
    const { total } = useContext(CartContext)
    const { setPaymentMethod } = useContext(CartContext)
    const { paymentMethod } = useContext(CartContext)
    const { cardNumber, setCardNumber } = useContext(CartContext)
    const { expiryDate, setExpiryDate } = useContext(CartContext)
    const { cvv, setCvv } = useContext(CartContext)


    const confirmPayment = () => {
        if (!cardNumber || !expiryDate || !cvv || !paymentMethod || total===0){
            alert('Please fill all required fields')
    }
    else{
        alert(`Payment successfull !!  Payment Method: ${paymentMethod}`)
    }
}

return (
    <>
        <div className="payment-main-container">


            <div className="payment-container">

                <h2>Select Payment Method:</h2>

                <label>

                    <input
                        type="radio"
                        name="payment"
                        value='COD'
                        onChange={(e) => setPaymentMethod(e.target.value)} />Cash On Delivery</label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="Card"
                        onChange={(e) => setPaymentMethod(e.target.value)} />Credit / Debit Card</label>

                <h2>Payment method:{paymentMethod}</h2>

                <div className="card-details">
                    <label htmlFor="">Enter your card Number:</label>
                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder='card number' />
                    <br />
                    <label htmlFor="">Enter your card's expiry date:</label>
                    <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder='Expiry date' />
                    <br />
                    <label htmlFor="">Enter your CVV number:</label>
                    <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder='CVV' />

                </div>
                <div className='confirm-button'>
                    <button id='Button' onClick={confirmPayment}>Confirm Payment</button>

                </div>
            </div>
            <div className="cart-container">
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
                            </div>
                        ))}

                    </div>

                    <h3 id='total'>Total  : ${total} </h3>
                    <button id='Button' onClick={() => navigate("/home")}>Back to shopping</button>
                </div>
            </div>
        </div>
    </>
)
}

export default Payment
