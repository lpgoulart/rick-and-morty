import React, {Component} from 'react';
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'

export default class Characters extends Component {
    
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    prevPage = () => {
        const {page} = this.state
        if ( page === 1 ) return;

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const {page, productInfo} = this.state
        if ( page === productInfo.pages ) return;

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/character?page=${page}`)

        const { results, ...productInfo } = response.data 
        
        this.setState({ products: results, productInfo, page })

        console.log(response.data)
    }
    
    render () {

    const { products, page, productInfo } = this.state; 

    return (
            <div className="product-list">
                <div className="display-flex">
                    { products.map(character => (
                        <article key={character.id}>
                            <img src={character.image} alt={character.name} width="100%"/>
                            <h2>{character.name}</h2>

                            <Link to={`/character/${character.id}`}>Acessar</Link>
                        </article>
                    ))}
                </div>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}