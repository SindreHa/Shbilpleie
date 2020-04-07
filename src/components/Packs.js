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
                    packId: "Vask",
                    style: "wash",
                    title: "Utvendig vask",
                    description: "Enkel utvendig vask, skånsom og grundig vask som fjerner salt- og asfaltpartikler",
                    price: "250,-"
                },
                {
                    packId: "VaskInteriør",
                    style: "wash",
                    title: "Innvendig interiør vask",
                    description: "Grundig og detaljert vask og støvsuging av innvendig interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi",
                    price: "250,-"
                },
                {
                    packId: "VaskInn&Ut",
                    style: "wash",
                    title: "Innvendig og utvendig vask",
                    description: "Både innvendig og utvendig vask. Skånsom og grundig ytre vask som fjerner salt- og asfaltpartikler. Grundig og detaljert vask og støvsuging av interiør. Gummifornyer på dashboard og andre deler av plastikk/gummi",
                    price: "500,-"
                },
                {
                    packId: "VaskUtPoler",
                    style: "wash-polish",
                    title: "Utvendig vask og polering",
                    description: "Grundig og skånsom utvendig vask med en høykvalitets vokspåføring for beskyttelse",
                    price: "800,-"
                },
                {
                    packId: "VaskUtInnPoler",
                    style: "wash-polish",
                    title: "Utvendig og innvendig vask, polering",
                    description: "Grundig og skånsom utvendig vask med en høykvalitets vokspåføring for beskyttelse og høy glans. Grundig og detaljert vask og støvsuging av innvendig interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi",
                    price: "1000,-"
                },
                {
                    packId: "VaskUtInnPolerRens",
                    style: "wash-polish",
                    title: "Utvendig og innvendig vask, polering med rubbing",
                    description: "Grundig og skånsom utvendig vask etterfulgt av fjerning av vaskeriper og oksidering i lakken, høykvalitets voks blir så påført for beskyttelse og høy glans. Grundig og detaljert vask og støvsuging av innvendig interiør. Gummifornyer blir påført på dashboard og andre deler av plastikk/gummi",
                    price: "1500,-"
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
                        <SlideIn in={this.state.transIn} delay={delay}>
                        <div className={"pack " + pack.style} key={i}>
                            <h1>{pack.title}</h1>
                            <h1 className="priceTitle">Pris</h1>
                            <p>{pack.description}</p>
                            <p className="price">{pack.price}</p>
                        </div>
                        </SlideIn>
                    )}) 
                }
                </section>
            </div>
        )
    }
}
