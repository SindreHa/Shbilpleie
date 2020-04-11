import React, { Component } from 'react'
import '../css/packs.css';
import { CSSTransition }  from 'react-transition-group';

const SlideIn = ({in: inProp, children, delay}) => (
    
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={delay}
        classNames='slideIn'
        appear >
            {children}
    </CSSTransition>
);

export default class Packs extends Component {

    constructor() {
        super()
        this.state = {
            transIn: true,
            packs: [
                {
                    style: "wash",
                    title: "Utvendig vask",
                    description: "Skånsom vedlikeholdsvask som vasker i dybden uten å fjerne eksiterende beskyttelse. Inkluderer også vask av felger",
                    price: "250,-"
                },
                {
                    style: "wash",
                    title: "Innvendig vask og rens",
                    description: "Grundig og detaljert vask og rens av interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi for å gjenopprette den opprinnelige overflate-farge og gir et klart, beskyttende belegg",
                    price: "250,-"
                },
                {
                    style: "wash",
                    title: "Innvendig og utvendig vask",
                    description: "Både innvendig og utvendig vask. Skånsom vedlikeholdsvask som vasker i dybden uten å fjerne eksiterende beskyttelse. Inkluderer også vask av felger. Grundig og detaljert vask og rens av interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi for å gjenopprette den opprinnelige overflate-farge og etterlate et klart, beskyttende belegg",
                    price: "500,-"
                },
                {
                    style: "wash-polish",
                    title: "Utvendig vask m/voksing",
                    description: "Skånsom og grundig utvendig vask som fjerner salt- og asfaltpartikler fra lakk og felger etterfulgt av et høykvalitets vokslag for beskyttelse og høy glans",
                    price: "1000,-"
                },
                {
                    style: "wash-polish",
                    title: "Utvendig og innvendig vask m/voksing",
                    description: "Skånsom og grundig utvendig vask som fjerner salt- og asfaltpartikler fra lakk og felger etterfulgt av et høykvalitets vokslag for beskyttelse og høy glans. Grundig og detaljert vask og rens av interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi for å gjenopprette den opprinnelige overflate-farge og etterlate et klart, beskyttende belegg",
                    price: "1200,-"
                },
                {
                    style: "wash-polish",
                    title: "Utvendig og innvendig vask m/lakk korrigering, polering og voksing",
                    description: "Skånsom og grundig utvendig vask som fjerner salt- og asfaltpartikler fra lakk og felger. Fjerning av vaskeriper og oksidasjon i lakken etterfulgt av polering og et høykvalitets vokslag for beskyttelse og høy glans. Grundig og detaljert vask og rens av interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi for å gjenopprette den opprinnelige overflate-farge og etterlate et klart, beskyttende belegg",
                    price: "2000,-"
                }
            ],
            extraPacks : [
                {
                    title: "Hjulskift",
                    description: "Bytting av sommerhjul/vinterhjul. Blir gjort med momentnøkkel for korrekt tilstramming av bolter",
                    price: "250,-",
                    style: "extra"
                },
                {
                    title: "Vask av hjul",
                    description: "Grundig vask av hjul som fjerner alt av salt- og asfaltpartikler",
                    price: "250,-",
                    style: "extra"
                }
            ]
        }
    }

    componentDidMount() {
        document.title = "SH Bilpleie - Pakker og priser"
    }

    render() {
        let delay = -70;
        return (
            <div className="packs-wrapper">
                <h1 style={{textAlign: "center"}}>Pakker og priser</h1>
                <div className="splitter"/>
                <section className="packs">
                {
                    this.state.packs.map((pack, i) => {
                        delay += 70
                        return(
                        <SlideIn in={this.state.transIn} delay={delay} key={i}>
                        <div className={"pack " + pack.style}>
                            <h1>{pack.title}</h1>
                            <h1 className="priceTitle">Pris</h1>
                            <p>{pack.description}</p>
                            <p className="price">{pack.price}</p>
                        </div>
                        </SlideIn>
                    )}) 
                }
                <h1 style={{textAlign: "center"}}>Ekstrapakker</h1>
                <div id="extraPacks">
                {
                    this.state.extraPacks.map((pack, i) => {
                        delay += 70
                        return(
                        <SlideIn in={this.state.transIn} delay={delay} key={i}>
                        <div className={"pack " + pack.style}>
                            <h1>{pack.title}</h1>
                            <h1 className="priceTitle">Pris</h1>
                            <p>{pack.description}</p>
                            <p className="price">{pack.price}</p>
                        </div>
                        </SlideIn>
                    )}) 
                }
                </div>
                </section>
            </div>
        )
    }
}
