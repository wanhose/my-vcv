import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = () => {    
    return (
        <div style = {{ padding: 15 }}>
            <Alert variant = 'danger'>
                <Alert.Heading>Acceso denegado</Alert.Heading>
                <p>No tienes acceso a esta página web.</p>
            </Alert>
        </div>
    )
}

export default Error