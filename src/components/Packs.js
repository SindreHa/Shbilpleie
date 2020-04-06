import React, { Component } from 'react'
import '../css/packs.css';

export default class Packs extends Component {

    constructor() {
        super()
        this.state = {
            packs: [
                {
                    packId: "UtvendigVask",
                    style: "simple",
                    title: "Utvendig vask",
                    description: "Enkel utvendig vask Consequat ut officia esse magna in dolore nulla duis aute ut et in excepteur. Ipsum sint dolor non pariatur. Quis dolore officia nisi sunt commodo pariatur voluptate excepteur velit anim."
                },
                {
                    packId: "InnvendigVask",
                    style: "simple",
                    title: "Innvendig vask",
                    description: "Enkel innvendig vask Pariatur dolore ea ut tempor eu eu ut et fugiat et reprehenderit occaecat. Anim ullamco ea incididunt cupidatat elit occaecat. Excepteur magna mollit duis sunt labore fugiat exercitation laborum id qui commodo ad laborum reprehenderit. Irure officia est deserunt Lorem anim ad excepteur aliquip do elit."
                },
                {
                    packId: "InnOgUtvendigVask",
                    style: "normal",
                    title: "Innvendig og utvendig vask",
                    description: "Enkel innvendig og utvendig vask Enim voluptate tempor commodo ea magna dolor eiusmod. Ad id officia cillum veniam pariatur enim esse consequat amet esse veniam ex consectetur consequat. Non minim nostrud velit mollit consectetur mollit qui."
                }
            ]
        }
    }

    render() {
        return (
            <section className="packs-wrapper">
            {
                this.state.packs.map((pack, i) => (
                    <div className={"pack " + pack.style} key={i}>
                        <h1>{pack.title}</h1>
                        <p>{pack.description}</p>
                    </div>
                )) 
            }
            </section>
        )
    }
}
