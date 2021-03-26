import React, { useState } from 'react'
import Product from '../Product/Product'
import Title from '../Title/Title';
import heroimg from 'G:/Projects-ReactJs/ecart/src/Assets/gif.gif'



const Products = ({themeColor ,title, productName, img, price, ratings}) => {
    const [products, setProducts] = useState([]);
    return (
        <div className="products mb-5 my-5">
            <div className="hero">
              <img src={heroimg}/>
              <h1>ECART Simplest Shopping Solution</h1>
              <div className="button">
              </div>
            </div>
            <div className="product" id="products">
                <div className="container">
                    <div className="row mx-5">
                        <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
                            <Product productName="iPhone 11 64GB" img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956148115" price={230} ratings={4}/>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
                            <Product productName="iPad Pro Grey" img="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551106639" price={780} ratings={3}/>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
                            <Product productName="iPhone 3G Black" img="https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_iphone_3g.png" price={12} ratings={5}/>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
                            <Product productName="Macbook Air White" price={1100} ratings={3} img="https://res-3.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1575544499/erfksmpsc8buuyfpdosd.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
