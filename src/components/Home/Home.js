import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import avatar from '../../images/avatar.jpg'
import { token } from '../../data/token'
import { Avatar, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    avatar: {
        border: 15,
        height: 192,
        width: 192
    },
    box: {
        padding: 15,
        width: '100%'
    },
    subtitle: {
        fontSize: '13pt'
    },
    title: {
        marginBottom: 0
    }
}))

const Home = () => {
    const classes = useStyles()
    const history = useHistory()
    const { tokenEntered } = useParams()

    useEffect(() => {
        if (tokenEntered !== token) {
            history.push('/')
        }
    }, [])

    return (
        <Grid
            alignItems = 'center'
            className = { classes.box }
            container
            direction = 'column'
            justify = 'center'>
            <Avatar 
                className = { classes.avatar }
                src = { avatar }/>
            <h1 className = { classes.title }>Juan José Vílchez Naranjo</h1>
            <p className = { classes.subtitle }>Desarrollador full-stack</p>
        </Grid>
    )
}

export default Home