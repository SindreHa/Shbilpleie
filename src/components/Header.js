import React, { Component } from 'react'
import '../css/header.css';

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            title: "SH Bilpleie"
        }
    }

    render() {
        return (
            <header>
                <h1>{this.state.title}</h1>
            </header>
        )
    }
}
