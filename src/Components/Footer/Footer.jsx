import { Col, Row } from 'antd'
import React from 'react'
import './Footer.css'
import Logo from 'G:/Projects-ReactJs/ecart/src/Assets/logo.png' 


const Footer = () => {
    return (
        <div className="app_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={Logo}/>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <h5>&copy; ECART 2021 - Designed and Developed ‣ <a href="https://github.com/muhammadfaizkhan" target="_blank">Muhammad Faiz Khan</a></h5>
            </div>
        </div>
    )
}

export default Footer
