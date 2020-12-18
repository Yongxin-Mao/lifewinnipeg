import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {restaurant_id, name_cn, address, location, image, description,short_promotion}=this.props.restaurant
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 card-deck">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>(
                           <div className="img-container p-5" onClick={()=>value.handleDetail(restaurant_id,this.props.restaurant)}>
                           <Link to="/detail">
                               <img src={image} alt="product" className="card-img-top"/>
                           </Link>
                       </div>
                        )}
                    
                    </ProductConsumer>
                    
                    <div className="card-footer d-flex justify-content-between">
                       <p className="align-self-center mb-0">{name_cn}</p>
                       <h5 className="text-blue mb-0">
                          <span className="mr-1">$</span>
                          <p>{address}</p>
                       </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

// Product.propTypes={
//     product: PropTypes.shape({
//         id:PropTypes.number,
//         img: PropTypes.string,
//         title:PropTypes.string,
//         price:PropTypes.number,
//         inCart:PropTypes.bool,
//     }).isRequired
// }

const   ProductWrapper=styled.div`
.card{
    border-color:transparent;
    transition: all .2s linear;
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition: all .2s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.img-container:hover .card-img-top{
    transform: scale(1.1);
    transition: all .3s linear;
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: .2rem .4rem;
}
`