import React, { Component } from 'react'
import '../css/infoBoxes.css';
import { CSSTransition }  from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faSmile, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
export default class InfoBoxes extends Component {

    constructor() {
        super()
        this.state = {
            transIn: true,
            infoBoxes: [
                {
                    title: "En fornøyd bil",
                    description: "Gi bilen den gaven den fortjener etter å frakte deg fra A - Å på en daglig basis. Ikke bare vil du selv være fornøyd med behandlingen, men bilen din vil takke deg og se blank ut i lang tid fremmover",
                    icon: faSmile
                },
                {
                    title: "Jevnlig vedlikehold",
                    description: "Ved å jevnlig vedlikeholde lakken og interiøret til bilen vil den ikke bare se bra ut, men også holde seg i bedre stand over lenger tid. Med polering og voksing vil lakken holde seg beskyttet mot skader fra blandt annet sollys og salt eller asfalt tjære",
                    icon: faCalendarAlt
                },
                {
                    title: "Ferdig på dagen",
                    description: "Jeg garanterer ferdig behandling av bilen på under en dag på alle pakker. Lever bilen på morgenen og ha den tilbake senest på kveldstid",
                    icon: faClock
                }
            ]
        }
    }

    render() {
        let delay = -70;
        return (
            this.state.infoBoxes.map((info, i) => {
            delay += 70;
            return (    
                <SlideIn in={this.state.transIn} delay={delay}>
                    <div className="infoBox" key={i}>
                        <div>
                            <FontAwesomeIcon icon={info.icon}/>
                        </div>
                        <h1>
                            {info.title}
                        </h1>
                        <p>
                            {info.description}
                        </p>
                    </div>
                </SlideIn>
            )
            })
        )
    }
}
