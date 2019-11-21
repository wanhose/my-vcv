import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { data } from '../../../data/data'
import './Knowledge.css'

const Knowledge = () => {
    return (
        <div className = 'knowledge'>
            <h3 className = 'title'>Conocimientos</h3>
            <Row>
                {
                    data.knowledge.map((technology) => {
                        return (
                            <Col className = 'custom-card' xs = { 6 } md = { 3 } xl = { 2 }>
                                <Row><img className = 'icon' src = { technology.icon }/></Row>
                                <Row><a className = 'knowledge-link' href = { technology.url } rel = 'noopener noreferrer' target = '_blank'>{ technology.name }</a></Row>
                            </Col>
                        )
                    })
                }
            </Row>
            <hr className = 'divider'/>
        </div>
    )
}

export default Knowledge