import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Payment from './components/Payment.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Payment' element={<Payment />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
