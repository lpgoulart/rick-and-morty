import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'


export default class Character extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {

        const {id} = this.props.match.params;

        const response = await api.get(`/character/${id}`)
    
        this.setState({product: response.data})
    }

    render () {
       
        const {product} = this.state

        return (
            <div className="content">
                <div className="product-info">
                    <h1>{product.name}</h1>
                    {/* <p>{product.description}</p> */}
                </div>
                <Link className="btn" to="/">Voltar</Link>
            </div>
        )
    }
}