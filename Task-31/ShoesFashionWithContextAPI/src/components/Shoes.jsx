import shoesData from "../ShoesData";
import './Shoes.css'
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const Shoes = ({ shoe }) => {
    const { addToCart } = useContext(CartContext);


    return (
        <div className="shoe-card">
            <div className="shoesdesc">
                <img className="shoe-image" src={shoe.image} alt={shoe.imageDesc} />
                <div className="desc">
                    <h2>{shoe.imageDesc}</h2>
                    <p>${shoe.price}</p>

                    <button onClick={() => addToCart(shoe)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shoes;