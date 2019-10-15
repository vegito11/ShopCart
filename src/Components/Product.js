import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
export default class Product extends Component {
    
    render() {
        const {id , title , img , price , inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto my-2 col-md-6 col-lg-4 mx-1">
                <div className="card">
                    <div className="img-container p-5" onClick={()=> console.log("You Clicked Image")
                    }>
                        <Link to="/details">
                            <img src={img} alt="" className="card-img-top"/>
                        </Link>                    
                        <button>
                            {inCart?
                                (<p className="text-capitalize mb-0"> In Cart </p>):
                                (<i className="fas fa-cart-plus"></i>)}
                        </button>
                    </div>
                    <div className="card-body text-info">
                        <h1> {title} </h1>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`

`
/* If Item is in cart then render `Already in cart `button else render but */