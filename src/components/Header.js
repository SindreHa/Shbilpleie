import React, { Component } from 'react'
import '../css/header.css';
import {
    Link
  } from "react-router-dom";

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            title: "SH Bilpleie",
            nav: [
                {
                    title: "Hjem",
                    path: "/"
                },
                {
                    title: "Pakker og priser",
                    path: "/pakker"
                },
                {
                    title: "Spørsmål og svar",
                    path: "/faq"
                }
            ]
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        {
                            this.state.nav.map((e, i) => (
                                <Link key={i} to={e.path}>
                                    {e.title}
                                </Link>
                            ))
                        }
                    </ul>
                    <img src="/img/logo-landscape.png"/>
                </nav>
            </header>
        )
    }
}
