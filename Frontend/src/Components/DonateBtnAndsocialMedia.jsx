import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DonateBtnAndsocialMedia = () => {

    const actions = [
        {
            icon: <a
                href='https://www.facebook.com/RahmaWorldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
        },
        {
            icon: <a
                href='https://www.instagram.com/rahmaworldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-instagram" style={{ color: '#bc2a8d' }}></i></a>
        },
        {
            icon: <a
                href='https://twitter.com/rahmaworldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }}></i></a>
        },
        {
            icon: <a
                href='https://www.youtube.com/c/RahmaWorldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-youtube" style={{ color: '#FF0000' }}></i></a>
        },
    ];



    return (
        <>
            <div className='donateBtnandsocialContainer'>
                <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                icon={action.icon}
                            />
                        ))}
                    </SpeedDial>
                </Box>
                <Stack direction="row" spacing={2} className='donateBtnFix'>
                    <a href="#XEFPGLLC"></a>
                    <Button variant="contained">Donate <span> Now</span></Button>
                </Stack>
            </div>
        </>
    )
}

export default DonateBtnAndsocialMedia