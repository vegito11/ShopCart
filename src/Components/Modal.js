import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from './ProductProvider';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom'
export class Modal extends Component {
    render() {
        return (
            <>
            <ProductConsumer>
            {
                (state)=>{
                    let {modalOpen,modalProduct,closeModal} = {...state};
                    let {img,title,price,company} = {...modalProduct};
                    {/* If Modal is Opened */}
                    if(modalOpen)
                    {
                        return(
                            <ModalContainer>
                            <div className="container">
                            <div className="row ">
                            <div className="col-8 col-lg-4 mx-auto col-md-6 text-center 
                            text-capitalize p-5"
                            id="modal"
                            >
                            {/* Image of Mobile */}
                                <img src={img} className="img-fluid" />
                                <h5 className="mx-auto"> {title} </h5>
                                <h4 className="txt-blue"> Price <span>$ </span> {price*173} </h4>
                                    <ButtonContainer onClick={()=> closeModal() }>
                                            Go Back
                                    </ButtonContainer>
                                    {/* add to cart button */}
                                    <Link to="/cart">
                                        <ButtonContainer cart className="" 
                                            onClick={()=> closeModal() }
                                        >
                                            Cart
                                        </ButtonContainer>
                                    </Link>
                                </div>                                
                            </div>
                            </div>
                            </ModalContainer>
                        )
                    }
                    else
                    {
                        return null
                    }
                }
            }
            </ProductConsumer>

            </>
        )
    }
}
export default Modal
const ModalContainer = styled.div`
    position:fixed;
    top:0 ;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.3);
    #modal{
        background:#00102;
    }
`;

