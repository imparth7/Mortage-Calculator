import { Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import { linkData } from '../data'

const LoadingComponent = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaaa',
}

const loadingMain = {
    width: '60%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2em'
}



const Loading = () => {

    const [hovering, sethovering] = useState(false);

    const mouseHover = () => {
        sethovering(true);
    }
    const mouseLeave = () => {
        sethovering(false);
    }

    const link = {
        color: '#fff',
        textDecoration: hovering ? 'underline' : 'none',
    }

    return (
        <>
            <div style={LoadingComponent}>
                <div style={loadingMain}>
                    <Typography textAlign="center" variant="h4">
                        Created and Developed by <span onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
                            <a href={linkData} target='_blank' rel='noreferrer' style={link}>Parth Dudhatra</a>
                        </span>
                    </Typography>
                    <br />
                    <Typography textAlign="center" variant="h6">
                        Mortgage Calculator app is used to calculate mortgage interest and paying money. Simple and chart UI create great User Experience.
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default Loading