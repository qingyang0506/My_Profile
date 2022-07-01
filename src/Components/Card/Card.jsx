import { Box } from '@mui/material'
import React from 'react'
import Back from './Back'
import Front from './Front'

export default function Card(props) {
    const { path: { title, content, url, photo, photoName } } = props;
    return (
        <Box className='flip-container' ontouchstart="this.classList.toggle('hover');" sx={{
            width: { xs: '78vw', sm: '32vw' },
            height: { xs: '30vh', sm: '38vh' }
        }}>
            <Box className="flipper">
                <Box className="front" sx={{
                    width: { xs: '78vw', sm: '32vw' },
                    height: { xs: '30vh', sm: '38vh' }
                }}>
                    {/* font */}
                    <Back pass={{
                        photo: { photo },
                        photoName: { photoName }
                    }} />
                </Box>
                <Box className='back' sx={{
                    width: { xs: '78vw', sm: '32vw' },
                    height: { xs: '30vh', sm: '38vh' }
                }}>
                    {/* back */}

                    <Front pass={{
                        title: { title },
                        content: { content },
                        url: { url }
                    }} />

                </Box>
            </Box>
        </Box>
    )
}
