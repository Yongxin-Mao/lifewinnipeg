import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container mainpage">
                        <div className="row">
                           <ProductConsumer>
                               {(value)=>{
                                  return value.restaurants.map(
                                      restaurant=>{
                                          return <Product key={restaurant.restaurant_id} restaurant={restaurant}/>
                                      }
                                  ) 
                               }}
                           </ProductConsumer>
                        </div>

                    </div>

                </div>
              {/* <Product /> */}
            </React.Fragment>
              
            
        )
    }
}
