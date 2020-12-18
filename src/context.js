import React, { Component } from 'react'
import {storeProducts,detailProduct,store} from './data'

const ProductContext=React.createContext()
//provider

//consumer

class ProductProvider extends Component {
    state={
        restaurants: [],
        restaurant:[],
        detailRestaurant: [],
        categories:[],
        isLoading: true,
        error: null,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    }
    componentDidMount(){
        this.getRestaurants()      
    }
    getRestaurants=()=>{
        let restaurants=[]
        let categories=[]
        fetch(`https://api.lifewinnipeg.com/restaurants/list`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              restaurants: data.data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
    }
    getItem=(id)=>{
        const item=this.state.detailRestaurant.find(i=>i.id===id)
        return item
    }
    handleDetail=(id,restaurant)=>{
        fetch(`https://api.lifewinnipeg.com/restaurants/foods/list?rid=`+id)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              detailRestaurant: data.items,
              categories:data.categories[0],
              isLoading: false,
              restaurant:restaurant,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
    }
    addToCart=(id)=>{
        let tempProducts=[...this.state.detailRestaurant]
        const index=tempProducts.indexOf(this.getItem(id))
        const product=tempProducts[index]
        product.inCart=true
        product.count=1
        const price=product.price
        product.total=price
        this.setState(
            ()=>{
            return {
                detailRestaurant:tempProducts,
                cart:[...this.state.cart,product],
                modalOpen:false
            }},
            ()=>{
                this.addTotals()
            }
            )
    }
    openModal=(id)=>{
        const product=this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increment=(id)=>{
        let tempCart=[...this.state.cart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count+1
        product.total=product.count*product.price
        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{
            this.addTotals()
        })
    }
    decrement=(id)=>{
        let tempCart=[...this.state.cart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count-1
        if(product.count===0){
            this.removeItem(id)
        }else{
            product.total=product.count*product.price
        }
        this.setState(()=>{
            return{cart:[...tempCart]}
        },()=>{
            this.addTotals()
        })
    }
    removeItem=(id)=>{
        let tempProducts=[...this.state.detailRestaurant]
        let tempCart=[...this.state.cart]
        tempCart=tempCart.filter(item=>item.id!==id)
        const index=tempProducts.indexOf(this.getItem(id))
        let removedProduct=tempProducts[index]
        removedProduct.inCart=false
        removedProduct.count=0
        removedProduct.total=0
        this.setState(()=>{
            return{
                cart:[...tempCart],
                detailRestaurant:[...tempProducts]
            }
        },()=>{
            this.handleDetail()
        })
    }
    clearCart=()=>{
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.getRestaurants()
            this.addTotals()
        })
    }
    addTotals=()=>{
        let subTotal=0
        this.state.cart.map(item=>(subTotal+=item.total))
        const tempTax=subTotal*0.1
        const tax=parseFloat(tempTax.toFixed(2))
        const total=subTotal+tax
        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer
export {ProductProvider,ProductConsumer}
