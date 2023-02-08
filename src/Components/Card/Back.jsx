
import { Card, CardMedia, Typography,Button } from '@mui/material'
import React from 'react'
import kemu from "../../img/kemu.png"
import DigimonSearch from "../../img/DigimonSearch.png"
import profile from "../../img/profile.png"
import tankBattle from '../../img/tankBattle.png'

const imgTable = (name) =>{
    if(name === "kemu"){
        return kemu
    }else if(name === "DigimonSearch"){
        return DigimonSearch
    }else if(name === "profile"){
        return profile
    }else if(name === "tankBattle"){
        return tankBattle
    }
}

export default function Back({pass:{photoName,styles:{style}}}) {

    return (
        <Card sx={{
            ...style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            // padding:2
        }}>

            <Typography >
                Kume Kupa
            </Typography>
            <CardMedia
                sx={{
                    objectFit: "cover",
                    height:"80%",
                    width:"100%"
                }}
                component="img"
                // backgroundSize="cover"
                image={imgTable(photoName.photoName)}
            />
            <Button>
                Click
            </Button>
        </Card>
    )
}
