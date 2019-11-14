import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import { token } from '../../data/token'
import Contact from './Contact/Contact'
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
            
                <Col xl = {{ offset: 2, span: 8 }}>
                    <Fade right>
                        <Navbar className = 'custom-nav'>
                            <Link
                                className = 'scroll-link'
                                smooth = 'true' 
                                spy = { true } 
                                to = 'bottom'>
                                <a href = '#' className = 'contact-link'>Contactar</a>
                            </Link>
                        </Navbar>
                    </Fade>
                    <Fade bottom>
                        <Profile/>
                    </Fade>
                    <Fade bottom>
                        <Introduction/>
                    </Fade>
                    <Fade bottom>
                        <Knowledge/>
                    </Fade>
                    <Fade bottom>
                        <Timeline/>
                    </Fade>
                    <Fade bottom>
                        <Contact/>
                    </Fade>
                </Col>
        </Container>
    )
}

export default Home