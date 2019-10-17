import React,{Component} from 'react'
import {storeProducts,detailProduct} from '../data'

const ProductContext = React.createContext()
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
      /* handleDetails will update detailProduct id */
      state={
        products:[],
        Currentdetail:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        subTotal:0,
        cartTax:0,
        cartTotal:0
      };

      /* Initialze the Array  */
      componentDidMount()
      {
        this.InitializeProducts(storeProducts)        
      };

      /* When clicked on cart then CurrentDetail object will set to this object  */        
      handleDetail=(id)=>{
        // console.log(" Handling Detail : "+id);
        const current_product = this.getItem(id);
        // console.log(current_product);
        this.setState(() => ({Currentdetail:current_product}))
    };
    /* When Click on addTocart it will add this item to state.cart array */
    addToCart=(id)=>{
        let oldState = [...this.state.products]
        /* get that item */
        let current_item = oldState.find(items=> items.id===id);
        current_item.total=current_item.price ;
        current_item.inCart=true;
        current_item.count=1;
        console.log(" Product Added to Cart ");
        this.setState(()=>
            {
                return {products:oldState,cart:[...this.state.cart,current_item]}
            },
            ()=>{
                console.log(this.state);
                this.getTotals()
            }
        )
    };

    /* 
        When we assign data directly we get the references so when we make any changes 
        they will not be also changes in data.js . So if we want original value this will 
        be problem  
    */
    /* Set state.product= copy of all initial data from data.js */
    InitializeProducts= (data)=>{
        let data_array=[]
        data.forEach(element => 
        {
            /* item is current item  */
            const item={...element}
            data_array=[...data_array,item]
        });
        console.log(data_array);
        this.setState(() => ({products:data_array}))
        
    }

    getItem = (id)=>{        
        return this.state.products.find(ele => ele.id===id)        
    }
    /* Open Modal when click on Cart */
    openModal=(id)=>{
        let product = this.getItem(id)
        this.setState(()=>({modalOpen:true,modalProduct:product}))
    }
    /* Close Modal when click on back to shopping */
    closeModal=()=>{
        this.setState(()=>({modalOpen:false}))
    }
    /* Increment the count */
    incrementCount = (id)=>{
        console.log(" Incremented Counter ");        
    }
    /* Decrement current Item Count */
    decrementCount = (id)=>{
        console.log(" Decremented Counter ");        
    }
    /* Remove Item from cart */
    removeItem = (id)=>{
        console.log(" Remove Item ",id);
        let tmpProduct = [...this.state.products]
        let currentProduct = this.getItem(id)
        currentProduct.count=0;
        currentProduct.total=0;
        currentProduct.inCart=false;
        let tmpCart = [...this.state.cart]
        /* . If the current item passes the condition, it gets sent to the new array.  */
        tmpCart = tmpCart.filter(item => item.id !== id )
        console.log(tmpCart);
        
        this.setState(()=>({cart:tmpCart,products:tmpProduct}),()=> this.getTotals())
    }
    /* Remove All Item from Cart  */
    clearCart = ()=> {
        console.log("All items are removed ");
        this.InitializeProducts(storeProducts);
        this.setState(()=>({cart:[]}))
    }
    /*  Update the State for Final Price  */
    getTotals = ()=>{
        let tmp_subTotal = 0;
        this.state.cart.map(item => (tmp_subTotal+=item.total) );
        let tmp_tax = parseFloat((tmp_subTotal * 0.15 ).toFixed(2));
        let tmp_cartTotal = tmp_subTotal + tmp_tax ; 
        this.setState(()=>{
            return {
                subTotal:tmp_subTotal,
                cartTax:tmp_tax,
                cartTotal:tmp_cartTotal
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                openModal:this.openModal,
                closeModal:this.closeModal,
                addToCart:this.addToCart,
                incrementCount:this.incrementCount,
                decrementCount:this.decrementCount, 
                removeItem:this.removeItem,
                clearCart:this.clearCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}

export {ProductProvider , ProductConsumer};
