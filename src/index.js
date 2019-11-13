import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './index.css'
import App from './components/App/App'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0d47a1'
        },
        secondary: {
            main: '#1565c0'
        },
        error: {
            main: '#f44336'
        }
    }
})

ReactDOM.render(
    <MuiThemeProvider theme = { theme }>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)
