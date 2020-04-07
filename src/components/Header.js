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
                    title: "Forside",
                    path: "/"
                },
                {
                    title: "Pakker og priser",
                    path: "/pakker"
                }
            ]
        }
    }

    componentDidMount() {
        //this.eventListeners();
    }

    eventListeners = () => {
        const icon = document.getElementsByClassName("menu")[0];
        icon.addEventListener(
            "click", () => {
                document.getElementsByClassName("hamburger-icon")[0].classList.toggle("open")
                /* document.getElementsByClassName("navLinks")[0].setAttribute("style", "display: grid;") */
                document.getElementsByClassName("navLinks")[0].classList.toggle("openMenu")
        })

        /* document.getElementsByClassName("navLinks")[0].addEventListener("transitionend", (e) => {
            if (!e.target.classList.contains("openMenu")) {
                e.target.setAttribute("style", "display: none;")
            } 
        }) */
    }

    hideMenu = () => {
        document.getElementsByClassName("navLinks")[0].classList.remove("openMenu")
        document.getElementsByClassName("hamburger-icon")[0].classList.remove("open")
    }

    render() {
        
        const mq = window.matchMedia( "(min-width: 500px)" );

        if (mq.matches) {
            console.log("større")
        } else {
            console.log("mindre")
        }
        return (
            <header>
                <nav>
                    <object data="/img/logo-landscape.svg" type="image/svg+xml"/>
                    <div className="hamburger-icon">
                        <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                        <p>Meny</p>
                    </div>
                    <ul>
                        {
                        this.state.nav.map((e, i) => (
                            <Link key={i} to={e.path} onClick={this.hideMenu}>
                                {e.title}
                            </Link>
                        ))
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}
