import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class DetailItem extends Component {
    render() {
        const {id,image_url,name_cn,price}=this.props.item
        return (
            <ProductConsumer>
                {(value)=>(
                                  
                    <section className="row section-item" id={id} key={id}>
                    <div className="thumb-nail">              
                        <img src={image_url} className="img-thumbnail" alt="product"/>
                    </div>
                    <div>
                        <div>{name_cn}</div>
                        <h4 className="text-blue">$ {price}</h4>
                    </div>
                    <div>
                        <i className="fas fa-plus-circle" 
                           onClick={()=>{
                               value.openModal(id);}}></i>
                    </div>
                    </section>
                )} 
            </ProductConsumer>
        )
    }
}