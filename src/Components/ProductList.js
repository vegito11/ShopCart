import React, { Component } from 'react'
import Product from './Product'
import {ProductConsumer} from './ProductProvider';
import Title from './Title';
/*  ProductConsumer will contain data pass from Product Provider class   
    We Mention Product Provider at top level so that all child component can access
    there data using Consumer 
*/
export default class ProductList extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    {/* Title */}
                    <Title/>                    
                    <div className="row">                        
                        <ProductConsumer>
                        {(list)=>{                            
                            // console.log(list)                            
                            return list.products.map((mobile)=> {
                                    return <Product key={mobile.id} product={mobile} />
                                })
                            }                                     
                        }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        )
    }
}
