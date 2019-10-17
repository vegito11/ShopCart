import {Link} from 'react-router-dom';
import React, { Component } from 'react'

class CartTotal extends Component {
    render() 
    {
        let {subTotal,cartTax,cartTotal,clearCart} = this.props.value;
        return (
            <div className="container">
            <div className="row ">
                <div className="col-md-6 mx-auto bg-dark-blue col-10 col-lg-8 cart-container py-2">
                    <h3 > Price Details </h3>
                    <hr />
                    <h4 className="text-title"> SubTotal : <span> $ </span>{subTotal} </h4>
                    <h4 className="text-title"> Tax : <span> $ </span> {cartTax} </h4>
                    <hr className="mx-3"/>
                    <h4 className="text-title"> Total : <span> $ </span> {cartTotal} </h4>
                    <Link to="/">
                        <button className="btn btn-outline-danger float-left ml-5 "
                            onClick={()=>clearCart()}
                        > Clear Cart 
                            <i><span className="fas fa-cart"></span></i> </button>
                    </Link>

                </div>
            </div>
        </div> 
        )
    }
}

export default CartTotal
