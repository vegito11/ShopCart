import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {ProductConsumer} from './ProductProvider'
export default class Product extends Component {
    
    render() {
        const {id,title , img , price , inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto my-2 col-md-6 col-lg-3 mx-1">
                {/* Card to Contain Product  */}
                <div className="card">
                <ProductConsumer>
                {
                    (data)=>(
                        /* Image Container */
                        <div className="img-container p-5" onClick={()=> data.handleDetail(id) }>
                            {/* Image */}
                            <Link to="/details">
                                <img src={img} alt="" className="card-img-top"/>
                            </Link>
                            {/* Button of cart */}
                            <button className="cart-btn px-3 "
                                disabled={inCart?true:false}
                                onClick={ ()=> {data.addToCart(id);data.openModal(id) }}
                            >
                                {inCart?
                                    (<p className="text-capitalize mb-0"> In Cart </p>):
                                    (<i className="fas fa-cart-plus"></i>)}
                            </button>
                        </div>                        
                    )
                }                
                </ProductConsumer>    
                <div className="card-footer d-flex justify-content-between text-info">
                    <p className="mb-0 align-self-center"> {title} </p>
                    <span className="mb-0">
                        {price*1749}
                        <span>  Rs.</span>
                    </span>
                </div> 
            </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        border-top:transparent;
        transition: all 1s linear;
    }
    .card-footer{
        border-color:transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.5);
            box-shadow: 0 0 5px 5px rgba(03,34,128,0.8);
        }
    }
    .img-container{
        position:relative;
        transition: all 1s linear;
        overflow:hidden;
    }
    .img-container:hover .card-img-top {
        transform:scale(1.4);        
    }
    .card-img-top{
        transition:all 1s linear;
        transition:background 0.1s linear;
    }
    .cart-btn {
        position:absolute;
        bottom:0;
        right:0;
        border-radius: 0.5rem 0 0 0 ;
        background:var(--blue-4);
        overflow:hidden;
        color:snow;
        transition: all 0.6s ease-in-out;
        transform:translate(100%,100%);
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);

    }
    .cart-btn:hover{
        background:var(--blue-2);
    }
    

`
/* If Item is in cart then render `Already in cart `button else render but */