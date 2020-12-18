import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class My extends Component {
    state = {
        isLoading: true,
        shoplists: [],
        error: null
      }
      componentDidMount(){
        this.fetchUsers()
        
    }
    fetchUsers() {
        // Where we're fetching data from
        fetch(`https://api.lifewinnipeg.com/restaurants/list`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              shoplists: data.data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
      }
    render() {
        const { isLoading, shoplists, error } = this.state;
        return (
            <div className="container">
                <h1 style={{textAlign:"center"}}>Shopping Center</h1>
                {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        shoplists.map(shop => {
                        const { restaurant_id, name_cn, address, location, image, description,short_promotion } = shop;
                        return (
                                <div class="card text-center" key={restaurant_id}>
                                    <div class="card-header">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{name_cn}</h5>
                                        <Link to='{}'>
                                        <img src={image} alt={name_cn}/>
                                        </Link>
                                        <p class="card-text">地址: {address}</p>
                                        <p class="card-text">{short_promotion}</p>
                                        <a href="#" class="btn btn-primary">Go Shopping</a>
                                    </div>
                                </div>
                            
                        )
                        })
                    ) : (
                        <h3>Loading...</h3>
                    )}
            </div>
            
        )
    }
}
