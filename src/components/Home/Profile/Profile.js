import React from 'react'
import { Image, Row } from 'react-bootstrap'
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
            <Row>
                <p className = 'location'>{ data.profile.location }</p>
            </Row>
            <hr className = 'divider w-100'/>
        </div>
    )
}

export default Profile