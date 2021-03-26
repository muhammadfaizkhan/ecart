import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import CartProduct from '../Cart/CartProduct'
import Product from '../Product/Product'
import { useStateValue } from '../Product/stateProvider'
import './Checkout.css'
import { getCartTotal } from '../../../reducer';
import { useHistory } from 'react-router'
import axios from './axios'


const Checkout = () => {
    const [{cart}, dispatch] = useStateValue();
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [succeeded, setSuceeded] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/checkout/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        setClientSecret()
    }, [cart]);
    const handleSubmit = async(e) => {
        e.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntend}) =>{
            setSuceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }
    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: "Please Review")
    }
    return (
        <div className="app_checkout">
            <div className="checkout_left">
                <div className="checkout_top">
                    <div className="checkout_heading">
                        <h1>Complete the checkout process :</h1>
                    </div>
                    <div className="checkout_delivery_material">
                        <div className="row">
                            
                            <p>Delivery Address</p>
                            <input type="text" placeholder="Abc Street, 123 New York"/>
                        </div>
                        <br/>
                        <div className="row">
                            <p>Add Instructions</p>
                            <input type="textarea" placeholder="Add sample also..."/>
                        </div>
                        
                    </div>
                </div>
                <div className="checkout_bottom">
                    <div className="button">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <button disabled={processing || disabled || succeeded} className="btn">{processing ? <p>Processing</p> : "Pay Now"}</button>
                        </form>
                    </div>
                </div>
            </div>
            <CurrencyFormat 
                            renderText={(value) => (
                                <div>
                                    <p style={{backgroundColor: "darkviolet", color: "white", padding: "12px", borderRadius: "4px", fontFamily: "'Montserrat', sans-serif"}}>Total items ( {cart?.length} ) <b>  〣 - 〣 </b> <strong style={{backgroundColor: "white", color: "darkviolet", paddingTop: "5px", marginLeft: "12px",paddingBottom: "5px",paddingLeft: "10px",paddingRight: "10px", borderRadius: "42px"}}> {value} </strong></p>
                                </div>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"$"}
                        
                        />
            <div className="checkout_right">
                <div className="checkout_middle mx-4 my-4">
                    <div className="row">
                        <div className="col-md-6">
                            {cart.map(item => (
                                <CartProduct
                                    productName={item.productName}
                                    img={item.img}
                                    price={item.price}
                                    ratings={item.ratings}
                                
                                />
                            ))}
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>   
                {error && <div>{error}</div>}      
            </div>
        </div>
    )
}

export default Checkout
