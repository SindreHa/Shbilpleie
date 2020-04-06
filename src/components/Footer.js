import React, { Component } from 'react'
import '../css/footer.css';

export default class Footer extends Component {

    constructor() {
        super()
        this.state = {
                phone: {
                    title: "Telefon",
                    link: "tel:90566159",
                    description: "+47 90566159",
                    icon: "fas fa-sms"
                },
                email: {
                    title: "E-Post",
                    link: "mailto:SHBilpleie@outlook.com",
                    description: "SHBilpleie@outlook.com",
                    icon: "far fa-envelope"
                }
        }
    }

    render() {
        return (
            <footer>
                <section>
                    <img src="/img/logo.png"/>
                    <div class="footerInfoBox">
                        <i className={this.state.phone.icon}/>
                        <h1>
                            {this.state.phone.title}
                        </h1>
                        <a href={this.state.phone.link}>
                            {this.state.phone.description}
                        </a>
                    </div>
                    <div class="footerInfoBox">
                        <i className={this.state.email.icon}/>
                        <h1>
                            {this.state.email.title}
                        </h1>
                        <a href={this.state.email.link}>
                            {this.state.email.description}
                        </a>
                    </div>
                </section>
            </footer>
        )
    }
}
