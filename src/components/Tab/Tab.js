import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ProductConsumer} from '../../context'

export default class Tab extends Component{
    state = {
        tab1: "active",
        tab2: "shopping",
        tab3: "cart",
        tab4: "my",
      }
    render(){
        const tabSelect=(e)=>{
            if(e.target.className=="foods"){
                this.setState({
                    tab1: "active",
                    tab2: "shopping",
                    tab3: "cart",
                    tab4: "my",
                })
            }else if(e.target.className=="shopping"){
                this.setState({
                    tab1: "foods",
                    tab2: "active",
                    tab3: "cart",
                    tab4: "my",
                })
            }else if(e.target.className=="cart"){
                this.setState({
                    tab1: "foods",
                    tab2: "shopping",
                    tab3: "active",
                    tab4: "my",
                })
            }else if(e.target.className=="my"){
                this.setState({
                    tab1: "foods",
                    tab2: "shopping",
                    tab3: "cart",
                    tab4: "active",
                })
            }
        }
        return(
           <div className="container">
           <div className="row tab">
                <div className="col tabitem">
                    <Link to="/">
                        <a className={this.state.tab1} onClick={(e)=>tabSelect(e)}><i className="fas fa-utensils tabbtn"></i></a>
                        <p style={{fontSize: "0.5rem"}} className={this.state.tab1}>Foods</p>
                    </Link>
                </div>
                <div className="col tabitem">
                    <Link to="/shopping">
                        <a className={this.state.tab2} onClick={(e)=>tabSelect(e)}><i className="fas fa-store-alt tabbtn"></i></a>
                        <p style={{fontSize: "0.5rem"}} className={this.state.tab2}>Stores</p>
                    </Link>
                </div>
                <div className="col tabitem">
                <Link to="/cart" className="cart">
                    <a className={this.state.tab3} onClick={(e)=>tabSelect(e)}><i className="fas fa-cart-plus tabbtn"></i></a>
                    <p style={{fontSize: "0.5rem"}} className={this.state.tab3}>Cart</p>
                    <ProductConsumer>
                               {(value)=>{
                                  return <i className="fas fa-circle cartsum"><div className="cartnumber">{value.cart.length}</div></i>
                                
                               }}
                    </ProductConsumer>
                </Link>
                </div>
                <div className="col tabitem">
                    <Link to="/my">
                        <a className={this.state.tab4} onClick={(e)=>tabSelect(e)}><i className="fas fa-user tabbtn"></i></a>
                        <p style={{fontSize: "0.5rem"}} className={this.state.tab4}>My</p>
                    </Link>
                </div>
                
           </div>
           </div>
       )
    }                   
}