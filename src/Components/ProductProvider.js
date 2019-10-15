import React from 'react'
import {storeProducts} from '../data'
const ProductContext = React.createContext()
const ProductConsumer = ProductContext.Consumer;
function ProductProvider(props) {
    const handleDetail=()=>{
         console.log(" Handling Detail");         
     }
    const addToCart=()=>{
        console.log(" Product Added to Cart ");
        
    }
    const productData = {
        products:storeProducts,
        handleDetail:handleDetail,
        addToCart:addToCart
    }
    return (
        <ProductContext.Provider value={productData}>            
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductProvider , ProductConsumer};
