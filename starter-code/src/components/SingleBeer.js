import React, { Component } from 'react'
import Navi from './Navi'
import axios from 'axios' 
import ListBeers from './components/ListBeers'
import { Link } from 'react-router-dom'




export default class SingleBeer extends Component {
    render() {
        return (
            <div>
                <h1>Single Beer</h1>
                <Navi />
            </div>
        )
    }
}
