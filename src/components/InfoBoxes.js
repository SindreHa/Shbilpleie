import React, { Component } from 'react'
import '../css/infoBoxes.css';

export default class InfoBoxes extends Component {

    constructor() {
        super()
        this.state = {
            infoBoxes: [
                {
                    title: "En fornøyd bil",
                    description: "Gi bilen den gaven den fortjener etter å frakte deg fra A - Å på en daglig basis. Ikke bare vil du selv være fornøyd med behandlingen, men bilen din vil takke deg og se blank ut i lang tid fremmover",
                    icon: "fas fa-smile"
                },
                {
                    title: "Jevnlig vedlikehold",
                    description: "Ved å jevnlig vedlikeholde lakken og interiøret til bilen vil den ikke bare se bra ut, men også holde seg i bedre stand over lenger tid. Med polering og voksing vil lakken holde seg beskyttet mot skader fra blandt annet sollys og salt eller asfalt tjære",
                    icon: "fas fa-calendar-alt"
                },
                {
                    title: "Ferdig på dagen",
                    description: "Jeg garanterer ferdig behandling av bilen på under en dag på alle pakker. Lever bilen på morgenen og ha den tilbake senest på kveldstid",
                    icon: "fas fa-clock"
                }
            ]
        }
    }

    render() {
        return (
            this.state.infoBoxes.map((info, i) => (
                <div className="infoBox" key={i}>
                    <div>
                        <i className={info.icon}/>
                    </div>
                    <h1>
                        {info.title}
                    </h1>
                    <p>
                        {info.description}
                    </p>
                </div>
            ))
        )
    }
}
