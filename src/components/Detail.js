import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import DetailItem from './DetailItem'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const items=value.detailRestaurant
                    const categories=value.categories
                    const restaurant=value.restaurant
                    return(
                       <div className="container py-1">
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <img src={restaurant.image} alt={restaurant.name_cn}/>
                                    <h1>{restaurant.name_cn}</h1>
                                    <p>{restaurant.description}</p>
                                    <p>{restaurant.address}</p>
                               </div>
                           </div>
                           <div className="bd-example">
                               <div className="row">
                                   <div className="col-3">
                                   <ul className="category">
                                       {categories.map(cate=>{
                                           return(
                                           <li key={cate.id}><a key={cate.id} href="#{cate.id}" className="is-current">{cate.name_cn}</a></li> 
                                           )
                                       })}
                                    </ul>
                                   </div>
                                   <div className="col-9">
                                        <div  className="scrollspy-example">
                                        <ProductConsumer>
                                            {(value)=>{
                                                return items.map(
                                                    item=>{
                                                        return <DetailItem key={item.id} item={item}/>
                                                    }
                                                ) 
                                            }}
                                        </ProductConsumer>
                                        </div>
                                    </div>
                                </div>

                            </div>
                           
                       </div> 
                    )
                }}
            </ProductConsumer>
        )
    }
}
