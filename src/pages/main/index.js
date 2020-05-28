import React, {Component} from 'react'
import './styles.css'
import api from '../../services/api'
import {Link} from 'react-router-dom'

export default class Main extends Component {

    state = {
        rick: [],
        morty: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/character?page=${page}`)

        const { results } = response.data 
        
        this.setState({ rick: results[0], morty: results[1]  })

        console.log(response.data.results[0])
    }

    render () {

        const {rick, morty} = this.state

        return (
            <div>
                <div className="jumbo">
                    <div className="portal"></div>
                    <div className="jumbo-content">
                        <h1>Rick and Morty</h1>
                        <h3>Get to know one of the best show out there</h3>
                    </div>
                </div>

                <div className="content">

                    <Link to="characters" className="btn">CHARACTERS</Link>

                </div>
            </div>
        )
    }
}