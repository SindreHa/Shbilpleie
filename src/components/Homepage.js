import React, { Component } from 'react'
import Header from './Header'
import Packs from './Packs'
import '../css/homepage.css';

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header/>
                <Packs/>
            </div>
        )
    }
}
