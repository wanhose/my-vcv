import React from 'react'
import { Row, Image } from 'react-bootstrap'
import { data } from '../../../data/data'
import avatar from '../../../images/avatar.jpg'
import './Profile.css'

const Profile = () => {
    return (
        <div className = 'profile'>
            <Row>
                <Image
                    className = 'avatar'
                    roundedCircle
                    src = { avatar }/>
            </Row>
            <Row>
    <h2 className = 'name'>{ data.profile.name }</h2>
            </Row>
            <Row>
                <p className = 'job'>{ data.profile.job }</p>
            </Row>
            <Row className = 'w-100'>
                <hr className = 'w-100'/>
            </Row>
        </div>
    )
}

export default Profile