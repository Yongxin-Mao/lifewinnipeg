import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal,addToCart}=value
                    const {id,name_cn,image_url,price,submenu}=value.modalProduct
                    if(!modalOpen){
                        return null;
                    }else{
                        return(
                            <ModalContainer>
                            <div className="container">   
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                                        <i className="far fa-times-circle" onClick={()=>closeModal()}></i>
                                        <h4>{name_cn}</h4>
                                        <img src={image_url} className="img-fluid" alt="pro"/>
                                        <h5 className="text-muted">Price: ${price}</h5>
                                        <h5>Sub-Menu</h5>
                                        <ul>
                                            {submenu.map((menu)=>{
                                                return(
                                                    <li key={menu}>{menu}</li>
                                                )
                                            })}
                                        </ul>

                                        <ButtonContainer onClick={()=>closeModal(),()=>addToCart(id)}>
                                            Add to Cart
                                        </ButtonContainer>
 
                                    </div>
                                </div>
                            </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll; 
  #modal{
      background: #fff;
  }
`