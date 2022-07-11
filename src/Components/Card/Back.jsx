
import { Card, CardMedia, Button } from '@mui/material'
import React from 'react'

export default function Back(props) {
    const { pass: { photo: { photo }, photoName: { photoName } } } = props

    return (
        <Card sx={{
            width: { xs: '78vw', sm: '32vw' },
            height: { xs: '30vh', sm: '38vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <CardMedia
                component="img"
                height="240vh"
                mb="10px"
                image={photoName === 'photo1' ? photo.photo1 :
                    photoName === 'photo2' ? photo.photo2 :
                        photoName === 'photo3' ? photo.photo3 :
                            photo.photo4}
            />
            <Button component="span" variant='contained' sx={{
                bgcolor: 'primary.main',
                textDecoration: 'underline',
                marginBottom:'10px'
            }}>
                See Detail
            </Button>

        </Card>
    )
}
