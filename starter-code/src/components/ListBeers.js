import React, { Component } from 'react'
import Navi from './Navi'
import axios from 'axios' 
import { Link } from 'react-router-dom'

export default class ListBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({beers: response.data})
        })
    }
    render() {
        return (
            <div>
                <Navi />
               <h1>List Beers</h1> 
               <div className='list-beers'>
                {this.state.beers.map(beer =>
                <div className='beer-box'>
                    <Link to={`/single-beer/${beer._id}`} className='home-links'>
                    <img src={beer.image_url} alt='nothing'/>
                    <div className='beer-box-inner'>
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                <h3>{beer.contributed_by}</h3>
                </div>
                </Link>
                </div>)}
                    </div>
            </div>
        )
    }
}
