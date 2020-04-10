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
        this.eventListeners();
    }

    eventListeners = () => {
        const icon = document.getElementsByClassName("menu")[0];
        const navLinkCont = document.getElementsByClassName("navLinks")[0];
        //const height = navLinkCont.scrollHeight;
        icon.addEventListener(
            "click", () => {
                document.getElementsByClassName("hamburger-icon")[0].classList.toggle("open")
                /* document.getElementsByClassName("navLinks")[0].setAttribute("style", "display: grid;") */
                navLinkCont.classList.toggle("openMenu")
                if (window.innerWidth < 900) {
                    if (navLinkCont.classList.contains("openMenu")) {
                        navLinkCont.style.maxHeight = "170px";
                    } else {
                        navLinkCont.style.maxHeight = "0px";
                    }
                }
                    
        })

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                document.getElementsByClassName("navLinks")[0].style.maxHeight = null;
            } 
        })
    }

    hideMenu = () => {
        document.getElementsByClassName("navLinks")[0].classList.remove("openMenu")
        document.getElementsByClassName("hamburger-icon")[0].classList.remove("open")
        if (window.innerWidth < 900) {
            document.getElementsByClassName("navLinks")[0].style.maxHeight = "0";
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li className="menu">
                            Meny
                            <div className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <div className="navLinks">
                        {
                            this.state.nav.map((e, i) => (
                                <Link key={i} to={e.path} onClick={this.hideMenu}>
                                    {e.title}
                                </Link>
                            ))
                        }
                        </div>
                    </ul>
                    <object data="/img/logo-landscape.svg" type="image/svg+xml">logo</object>
                </nav>
            </header>
        )
    }
}
