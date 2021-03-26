import React, {useRef, useState,useEffect, useCallback} from 'react'
import logo from 'G:/Projects-ReactJs/ecart/src/Assets/logo.png'
import './Modal.css'
import {animated, useSpring} from 'react-spring'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact'
import { Link, NavLink } from 'react-router-dom'
import { useStateValue } from '../Pages/Product/stateProvider'
export const Modal = ({setVisible, visible}) => {
    const modalRef = useRef()
    const toggleClose = () => {
        setVisible(false)
    }
    const animation = useSpring({
        config: {
            duration: 220
        },
        opacity: visible ? 1 : 0,
        transform: visible ? `translateX(0%)`: `translateX(100%)`
    })
    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && visible){
                setVisible(false)
            }
        },
        [setVisible, visible]
    )
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])
    const [{cart}, dispatch] = useStateValue();

    return (
        <>
        {
            visible ? 
                    (
                        <MDBModal toggle={toggleClose} isOpen={visible} modalStyle={{background: "transparent"}} side position="top-right">
                            <animated.div style={animation}>                                      
                                <MDBModalHeader>
                                    <div className="modal_header">
                                        <img src={logo}/> 
                                        <p>MENU</p>
                                    </div>
                            </MDBModalHeader>
                                <MDBModalBody className="links">
                                    <br/>
                                    <p> Products </p>
                                    <p> Orders </p>
                                    <p> Favourites </p>
                                    <p> Shipped </p>
                        </MDBModalBody>
                                <NavLink to="/cart" style={{textDecoration: "none", color: "black", justifyContent: "center"}}>
                                    <MDBModalFooter> 
                                        <div className="cart">
                                            <ShoppingCartOutlined />
                                            <h5>{cart?.length}</h5>
                                        </div>
                                    </MDBModalFooter>        
                                </NavLink>
                            
                        </animated.div>
                    </MDBModal> 
                    )
            : null
        }
        </>
    )
}

export default Modal