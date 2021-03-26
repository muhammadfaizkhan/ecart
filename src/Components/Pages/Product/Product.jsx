import React from 'react'
import './Product.css';
import {EyeFilled, StarFilled} from '@ant-design/icons'
import { IconButton } from '@material-ui/core';
import {useStateValue} from './stateProvider'

function Product ({productName, img, price, ratings, id}){
    const [{cart}, dispatch] = useStateValue();
    const addtocart = () => {
        // throwing in to cart
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                productName: productName,
                img: img,
                price: price,
                ratings: ratings
            },
        })
    }
    return (
        <div className="product_card">
            <div class="card">
                <div className="card_img">
                    <img src={img} />
                </div>
            <section class="details">
                <div class="min-details">
                <h1>{productName}<span>
                    {Array(ratings)
                    .fill()
                    .map(( _ , i) => 
                    ( <StarFilled /> 
                    ))} </span></h1>
                <h1 class="price">$ {price}</h1>
                </div>
                <div className="button">
                    <button className="btn" onClick={addtocart}>
                        Add to Cart
                    </button>
                    <IconButton icon="Home"><EyeFilled /></IconButton>
                </div>
            </section>
            </div>
        </div>
    )
}

export default Product
