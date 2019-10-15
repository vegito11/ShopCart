import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import img from  '../fcb.svg'  ;
// import logo from  '../logo.svg'  ;
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-primary navbar-expand-sm px-sm-5">
            <Link to="/">
                <img src={img}  width="30" height="30" alt="logo"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5" >
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <i className="fas fa-cart-plus"></i>
                    <span>
                        My Cart
                    </span>
                </ButtonContainer>
            </Link>
        </nav> 
    }
}
