
import { Card, CardMedia } from '@mui/material'
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
                sx={{objectFit: "cover"}}
                component="img"
                backgroundSize="cover"
                image={photoName === 'photo1' ? photo.photo1 :
                    photoName === 'photo2' ? photo.photo2 :
                        photoName === 'photo3' ? photo.photo3 :
                            photo.photo4}
            />

        </Card>
    )
}
