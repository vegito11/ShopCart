import React, { Component } from 'react'
import {ProductConsumer} from './ProductProvider';
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom';
export default class ProductDetails extends Component {
    render() {
        return (            
            <ProductConsumer>
             {
                value =>
                {
                    const {id,company,img,info,price,title,inCart} = value.Currentdetail;
                    console.log(value.Currentdetail);                      
                    return(<div className="container">
                        <div className="row py-5">
                            {/* start title */}
                            <p className="text-capitalize text-slanted mx-auto h4">
                            {title}
                            </p>
                            {/* End title */}
                        </div>
                        <div className="row">
                            {/* Image */}
                            <div className="col-10 col-md-6  pl-5">
                                <img src={img} alt="Product Image " className="img-fluid ml-5"/>
                            </div>
                            {/* End Image */}
                            <div className="col-10 col-md-4 ">
                                <h4 className="txt-blue"> Model : <span>{title}</span></h4>
                                <h3 className="text-muted mb-2"> Made By : 
                                    <span className="text-uppercase"> {company}</span> 
                                </h3>
                                <h5>Price : <span>$ </span>{price*173} </h5>
                                <h4 className="mb-1 mt-3 txt-bold txt-black"> Some info about Product </h4>
                                <p className="text-info">
                                    {info}
                                </p>
                                {/* Go To Home Button */}
                                <Link to="/">
                                    <ButtonContainer>
                                        Go to Products
                                    </ButtonContainer>                                
                                </Link>
                                {/* add to cart button */}
                                <ButtonContainer cart className="" 
                                    disabled={inCart?true:false}
                                    onClick={ ()=> {value.addToCart(id)} }
                                    onClick={ ()=> {value.openModal(id)} }
                                >
                                    {inCart?
                                    (<p className="text-capitalize mb-0"> In Cart </p>):
                                    (<i className="fas fa-cart-plus"></i>)}
                                </ButtonContainer>
                            </div>
                        </div>
                        </div>
                    )
                }
            }   
            </ProductConsumer>            
        )
    }
}
