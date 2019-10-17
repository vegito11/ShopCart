import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import CartHeaders from './CartHeaders';
import CartList from './CartList';
import CartTotal from './CartTotal';
import {ProductConsumer} from '../ProductProvider';
export default class Store extends Component {
    render() {
        return (            
            <>
            <ProductConsumer>
            {
                (values)=>{
                    console.log("lenghtt : ",values.cart.length);
                    
                    if(values.cart.length === 0)
                        return (<EmptyCart/>)
                    else 
                        return (<>
                            <CartHeaders/>
                            <CartList value={values}/>
                            <CartTotal value={values}></CartTotal>
                            </>
                            )
                }
            }
            </ProductConsumer>
            </>
        )
    }
}


