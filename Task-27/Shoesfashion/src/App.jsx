import { useState } from 'react'
import './App.css'
import Shoes from './components/Shoes'

function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0 
  );

  const addToCart = (shoe) => {
    const exist = cart.find(item => item.id === shoe.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const increaseQyt = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  }
  const decreaseQyt = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  }
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="https://plus.unsplash.com/premium_photo-1673326679548-962d2fe77423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXMlMjBsb2dvfGVufDB8fDB8fHww" alt="" />
          </div>
          <div className="navbar-content">
            <ul>
              <li>Home</li>
              <li>categories</li>
              <li>About-us</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main-container">
        <div className="items">
          <Shoes id={1} addToCart={addToCart} price={10} imageDesc="Red sports shoes" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Shoes id={2} addToCart={addToCart} price={20} imageDesc="Blue running shoes" image="https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww" />
          <Shoes id={3} addToCart={addToCart} price={15} imageDesc="Yellow casual sneaker" image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D" />
          <Shoes id={4} addToCart={addToCart} price={25} imageDesc="White pink unique" image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww" />
          <Shoes id={5} addToCart={addToCart} price={50} imageDesc="Gray casual sneaker" image="https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww" />
          <Shoes id={6} addToCart={addToCart} price={10} imageDesc="Red sports shoes" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Shoes id={7} addToCart={addToCart} price={20} imageDesc="Blue running shoes" image="https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww" />
          <Shoes id={8} addToCart={addToCart} price={15} imageDesc="Yellow casual sneaker" image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D" />
          <Shoes id={9} addToCart={addToCart} price={25} imageDesc="White pink unique" image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww" />
          <Shoes id={10} addToCart={addToCart} price={50} imageDesc="Gray casual sneaker" image="https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww" />


        </div>
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
            <h3 id='total'>Total  : ${total}</h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
