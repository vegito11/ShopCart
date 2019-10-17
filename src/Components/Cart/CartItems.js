import React, { Component } from 'react'

export class CartItems extends Component {
    render() {
        const {id,img,price,total,count,title} = this.props.item
        const {incrementCount,decrementCount,removeItem} = this.props.value
        return (            
                <div className="row mx-auto">
                    <div className="col-lg-2 mx-auto col-10">
                        <img src={img} className="image-fluid" style={{width:'6rem',height:'6rem' }}/>
                    </div>
                    <div className="col-lg-2 mx-auto col-10">
                        {title}
                    </div>
                    <div className="col-lg-2 mx-auto col-10">
                        <span>$ </span>{price}
                    </div>
                    <div className="col-lg-2 mx-auto col-10">
                        {/*  Decrement Value */}
                        <span className="btn btn-success"
                        onClick={()=> decrementCount(id) }
                        >-</span>
                        {/*  Count Value */}
                        <span className="btn btn-outline-primary btn-group-toggle">{count}</span>
                        {/*  Increment Count */}
                        <span className="btn btn-success"
                        onClick={()=> incrementCount(id) }
                        >+</span>
                        {/* Remove Button */}
                        <span className="mx-2" onClick={()=> removeItem(id) }> 
                            <i className="fas fa-trash bg-danger"></i> 
                        </span>
                    </div>
                    <div className="col-lg-2 mx-auto col-10">
                        <span>$ </span>{total}
                    </div>
                </div>            
        )
    }
}

export default CartItems
