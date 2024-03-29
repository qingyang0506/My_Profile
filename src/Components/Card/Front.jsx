import { Card, CardContent, IconButton, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { GitHub } from '@mui/icons-material'

export default function Front(props) {

    const { pass: { title, content,url:{url},styles:{style}} } = props;

    return (
        <Card sx={{
            ...style,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            // padding:2
        }}>
            <Box sx={{
                // marginLeft: '2vh',
            }}>
                <Typography variant='h5'>
                    {title.title}
                </Typography>
            </Box>
            <CardContent>

                <Box>
                    <Typography variant="body2" color="text.secondary">
                        {content.content}
                    </Typography>
                </Box>
            </CardContent>
            <Box
                sx={{
                    // marginLeft: '2vh',
                    // marginBottom: '2vh'
                }}
            >
                <IconButton href={url[0]} target="_blank" size={'large'} sx={{
                    // marginRight: '2vh'
                }}>
                    <GitHub />
                </IconButton>

                <Button href={url[1]} target="_blank" variant="container" sx={{
                    bgcolor: '#38d13b',
                    color: '#eee',
                    '&:hover': {
                        bgcolor: '#2fb532'
                    },
                }}>
                    Go
                </Button>
            </Box>

        </Card>
    )
}
