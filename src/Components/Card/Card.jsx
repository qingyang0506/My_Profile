import { Box } from '@mui/material'
import React from 'react'
import Back from './Back'
import Front from './Front'

export default function Card(props) {

    const style = {
        width: { xs: '78vw', sm: '32vw' },
        height: { xs: '34vh', sm: '38vh' }
    }
    const { path: { title, content, url, photo, photoName } } = props;
    return (
        <Box className='flip-container' ontouchstart="this.classList.toggle('hover');" sx={style}>
            <Box className="flipper">
                <Box className="front" sx={style}>
                    {/* font */}
                    <Back pass={{
                        photo: { photo },
                        photoName: { photoName },
                    }} />
                </Box>
                <Box className='back' sx={style}>
                    {/* back */}

                    <Front pass={{
                        title: { title },
                        content: { content },
                        url: { url },
                        styles:{style}
                    }} />

                </Box>
            </Box>
        </Box>
    )
}
