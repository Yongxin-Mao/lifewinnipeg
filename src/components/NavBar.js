import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class NavBar extends Component{
    render(){
       return(
           <NavWrapper className="nav-bar fixed-top">
              <div>
                <Link to="/">
                  <img src="logo.png" className="img-fluid" alt="logo"/>
                </Link>
              </div>
              <div>
                <form className="form">
                      <input type="text" className="form-control" placeholder="Find out yummys..."/>
                      <button type="submit" className="btn btn-primary">Search</button>
                </form>
              </div>
              <div>
                <i className="far fa-bell"></i>
              </div>
           </NavWrapper>
       )
    }
}


const NavWrapper=styled.nav`
  background: #bbb;
  .nav-link{
      color: #fff;
      font-size: 1.3rem;
      text-transform: capitalize;
  }
`