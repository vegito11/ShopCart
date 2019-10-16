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
        modalOpen:true,        
        modalProduct:detailProduct
      };


      /* Initialze the Array  */
      componentDidMount()
      {
        this.InitializeProducts(storeProducts)        
      };


      handleDetail=(id)=>{
        // console.log(" Handling Detail : "+id);
        const current_product = this.getItem(id);
        // console.log(current_product);
        this.setState(() => ({Currentdetail:current_product}))
    };

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
                
            }
        )
    };

    /* 
        When we assign data directly we get the references so when we make any changes 
        they will not be also changes in data.js . So if we want original value this will 
        be problem  
    */

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

    openModal=(id)=>{
        let product = this.getItem(id)
        this.setState(()=>({modalOpen:true,modalProduct:product}))
    }

    closeModal=()=>{
        this.setState(()=>({modalOpen:false}))
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                openModal:this.openModal,
                closeModal:this.closeModal,
                addToCart:this.addToCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}

export {ProductProvider , ProductConsumer};
