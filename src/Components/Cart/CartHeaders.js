import React from 'react'

function CartHeaders() {
    return (
        <div className="container-fluid d-none d-lg-block text-center">
            <div className="row text-center mt-3">
                {/* Products */}
                <div className="col-lg-2 mx-auto">
                    <p className="text-uppercase"> Products </p>
                </div>
                {/* Product Name */}
                <div className="col-lg-2 mx-auto">
                <p className="text-uppercase"> Name </p>
                </div>
                {/* Product Price */}
                <div className="col-lg-2 mx-auto">
                <p className="text-uppercase"> Price </p>
                </div>
                {/* Product Quantity */}
                <div className="col-lg-2 mx-auto">
                <p className="text-uppercase"> Quantity </p>
                </div>
                {/* Product Total */}
                <div className="col-lg-2 mx-auto">
                <p className="text-uppercase"> Total </p>
                </div>
            </div>
        </div>
    )
}

export default CartHeaders
