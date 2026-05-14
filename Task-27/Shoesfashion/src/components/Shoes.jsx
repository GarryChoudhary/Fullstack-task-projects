import './Shoes.css'


function Shoes({id,image,price,imageDesc,addToCart}){
    return(
    <>
    <div className="shoes">
        <div className="shoesdesc">
        <img src={image} alt="#"  />
        <div className="desc">
            <h3>{imageDesc}</h3>
            <span>price: ${price}</span>
            <button onClick={() => addToCart({id, price, imageDesc, image })}>Add to cart</button>
        </div>

        </div>
    </div>
    
    </>
    )
}

export default Shoes;