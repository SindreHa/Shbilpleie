import React, { Component } from 'react'
import Packs from './Packs'
import InfoBoxes from './InfoBoxes'
import '../css/homepage.css';

export default class Homepage extends Component {

    constructor() {
        super()
        this.state = {
            welcomeTitle: "Velkommen til SH Bilpleie",
            welcomeParagraph: "Nisi culpa minim reprehenderit sint ut quis voluptate cillum laborum. Ex ad aliquip esse do commodo minim fugiat mollit commodo. Labore id dolore sit sint anim adipisicing. Nisi consequat commodo laborum excepteur pariatur proident non ex amet proident. Veniam dolore consequat sunt anim adipisicing dolore nisi veniam voluptate dolore duis commodo. Veniam sit et enim proident aute exercitation aute veniam. "
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
