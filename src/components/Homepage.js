import React, { Component } from 'react'
import Packs from './Packs'
import InfoBoxes from './InfoBoxes'
import '../css/homepage.css';

export default class Homepage extends Component {

    constructor() {
        super()
        this.state = {
            welcomeTitle: "Velkommen til SH Bilpleie",
            welcomeParagraph: "SH Bilpleie tilbyr alle tjenester innen bilpleie. Alt fra enkel utvendig/innvendig vask til innvendig rens, polering, lakkrens og lakkforsegling. Alt til en rimelig nabopris. Velg ut en pakke og få bilen din tilbake til sanne blanke tilstand."
        }
    }

    componentDidMount() {
        document.title = "SH Bilpleie - Forside"
    }

    render() {
        return (
            <div className="homepage">
                <section className="homepage-welcome">
                    <h1>
                        {this.state.welcomeTitle}
                    </h1>
                    <p>
                        {this.state.welcomeParagraph}
                    </p>
                </section>

                <div className="splitter"/>

                <section className="infoBoxes">
                    <InfoBoxes/>
                </section>
            </div>
        )
    }
}
