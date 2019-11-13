import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Icon, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    box: {
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        WebkitTransform: 'translate(-50%,-50%)',
        width: '80%'
    },
    paper: {
        backgroundColor: '#d50000',
        color: 'white',
        padding: 15,
        textAlign: 'center'
    }
}))

const Error = () => {
    const classes = useStyles()
    
    return (
        <div className = { classes.box }>
            <Paper 
                className = { classes.paper }
                color = 'primary'>
                <Icon fontSize = 'large'>highlight_off</Icon>
                <h2 style = {{ marginTop: '0.30em' }}>Acceso denegado</h2>
                <p>No tienes acceso a esta web</p>
            </Paper>
        </div>
    )
}

export default Error