import React, { Component } from 'react'
import CartItems from './CartItems';
import CartTotal from './CartTotal';
export class CartList extends Component {
    render() {
        const {value} = this.props;
        const {cart} = this.props.value;
        return (
            <div className="container-fluid text-center">
            { cart.map(item=>{
                // console.log(item);                
                return (
                        <CartItems key={item.id} value={value} item={item} />                        
                    )}
            ) }
                <CartTotal value={value}></CartTotal>
            </div>
        )
    }
}

export default CartList
