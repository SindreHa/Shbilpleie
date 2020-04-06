import React, { Component } from 'react'
import '../css/footer.css';

export default class Footer extends Component {

    constructor() {
        super()
        this.state = {
            contactInfo: [
                {
                    title: "Telefon",
                    link: "tel:90566159",
                    description: "+47 90566159",
                    icon: "fas fa-sms"
                },
                {
                    title: "E-Post",
                    link: "mailto:SHBilpleie@outlook.com",
                    description: "SHBilpleie@outlook.com",
                    icon: "far fa-envelope"
                }
            ]
                
        }
    }

    render() {
        return (
            <footer>
                <section>
                    <img src="/img/logo.png"/>
                    {
                        this.state.contactInfo.map((e, i) => (
                            <div className="footerInfoBox" key={i}>
                                <i className={e.icon}/>
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
