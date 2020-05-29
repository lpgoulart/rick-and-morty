import React, {Component} from 'react';
import './styles.css'

export default class Header extends Component {
    render () {
        return (
            <header id="main-header">
                Rick and Morty App
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/characters">CHARACTERS</a></li>
                            <li><a href="/characters">EPISODES</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

