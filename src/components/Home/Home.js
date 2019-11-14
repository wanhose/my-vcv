import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { token } from '../../data/token'
import Introduction from './Introduction/Introduction'
import Knowledge from './Knowledge/Knowledge'
import Profile from './Profile/Profile'
import Timeline from './Timeline/Timeline'
import './Home.css'

const Home = () => {
    const history = useHistory()
    const { tokenEntered } = useParams()

    useEffect(() => {
        if (tokenEntered !== token) {
            history.push('/')
        }
    }, [])

    return (
        <Container className = 'home-container' fluid>
            <Navbar>
                <Nav.Link className = 'contact-link' href = '#'>Contactar</Nav.Link>
            </Navbar>
            <Profile/>
            <Introduction/>
            <Knowledge/>
            <Timeline/>
        </Container>
    )
}

export default Home