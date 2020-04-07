import React, { Component } from 'react'
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSms, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {

    constructor() {
        super()
        this.state = {
            contactInfo: [
                {
                    title: "Telefon",
                    link: "tel:90566159",
                    description: "+47 90566159",
                    icon: faSms
                },
                {
                    title: "E-Post",
                    link: "mailto:SHBilpleie@outlook.com",
                    description: "SHBilpleie@outlook.com",
                    icon: faEnvelope
                }
            ]
                
        }
    }

    render() {
        return (
            <footer>
                <section>
                    <img src="/img/logo-LowRes.png"/>
                    {
                        this.state.contactInfo.map((e, i) => (
                            <div className="footerInfoBox" key={i}>
                                    <FontAwesomeIcon icon={e.icon}/>
                                <h1>
                                    {e.title}
                                </h1>
                                <a href={e.link}>
                                    {e.description}
                                </a>
                            </div>
                        ))
                    }
                </section>
            </footer>
        )
    }
}
