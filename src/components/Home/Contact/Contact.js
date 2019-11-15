import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { data } from '../../../data/data'
import './Contact.css'

const Contact = () => {
    return (
        <div className = 'contact'>
            <Row>
                <Col className = 'contact-item'>
                    <Row>
                        <h5>Correo electrónico</h5>
                    </Row>
                    <Row>
                        <a className = 'footer-contact-link' href = { `mailto:${data.profile.email}` }>{ data.profile.email }</a>
                    </Row>
                </Col>
                <Col className = 'contact-item'>
                    <Row>
                        <h5>GitHub</h5>
                    </Row>
                    <Row>
                        <a className = 'footer-contact-link' href = { data.profile.github} target = '_blank'>{ data.profile.nick }</a>
                    </Row>
                </Col>
                <Col className = 'contact-item'>
                    <Row>
                        <h5>Teléfono</h5>
                    </Row>
                    <Row>
                        <a className = 'footer-contact-link' href = { `tel:+34${data.profile.phone}` }>{ data.profile.phone }</a>
                    </Row>
                </Col>
            </Row>
            <div id = 'bottom'/>
        </div>
    )
}

export default Contact