import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Product/stateProvider';
import { getCartTotal } from '../../../reducer';
import { useHistory } from 'react-router';


const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue();
    const history = useHistory()
    const handlePayment= (e) => {
        e.preventDefault()
        history.push('/payment')
    }
    return (
        <div className="subtotal">
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
            <div className="button">
                <button className="btn" onClick={handlePayment}>Checkout Now</button>
            </div>
        </div>
    )
}

export default Subtotal
