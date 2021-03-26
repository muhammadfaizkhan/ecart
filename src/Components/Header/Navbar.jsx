import { Drawer, PageHeader } from 'antd'
import React, { useState } from 'react'
import './Navbar.css'
import logo from 'G:/Projects-ReactJs/ecart/src/Assets/logo.png'
import {MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import { MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact'
import Modal from './Modal'
import { Link } from 'react-router-dom'


const Navbar = ({closeModal, modelRef}) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    return (
        <div className="app_navbar "  style={{overflow: "hidden"}}>
            <div className="pageHeader">
                <Link to="/">
                    <img src={logo} alt="ecart"/>
                </Link>
            </div>
            <div className="pageHamburger" style={{overflow: "hidden"}}>
                {
                    visible
                    ? <MenuUnfoldOutlined onClick={onClose} />
                    : <MenuOutlined onClick={showDrawer}/>                  
                }
                <Modal visible={visible} setVisible={setVisible}/>
            </div>
        </div>
    )
}

export default Navbar
