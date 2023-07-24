import { Box, Stack, Typography,IconButton,Button} from '@mui/material'
import React from 'react'
import kemu from "../../img/kemu.png"
import DigimonSearch from "../../img/DigimonSearch.png"
import profile from "../../img/profile.png"
import tankBattle from '../../img/tankBattle.png'
import lego from "../../img/lego.png"
import processor8 from "../../img/processor8.png"
import virtualStudyRoom from "../../img/virtual_study_room.png"
import Covid19 from "../../img/covid-19.png"
import { GitHub } from '@mui/icons-material'

const imgTable = (name) =>{
    if(name === "kemu"){
        return kemu
    }else if(name === "DigimonSearch"){
        return DigimonSearch
    }else if(name === "profile"){
        return profile
    }else if(name === "tankBattle"){
        return tankBattle
    }else if(name === "lego"){
        return lego
    }else if(name ==="processor8"){
        return processor8
    }else if(name === "virtual_study_room"){
        return virtualStudyRoom
    }else if(name === "covid-19"){
        return Covid19;
    }
}

export default function Card({title,content,url,photoName,index}) {

    return (
        <Stack
            bgcolor={"white"}
            padding= {3}
            gap={4}
            sx={{
                transition: '0.4s all',
                '&:hover':{
                    transform: 'translateY(-10px)',
                    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)'
                }
            }}
        >
            <Typography
                variant='h2'
                fontSize={"1.4em"}
                fontWeight={400}
            >
                 {index+1}. {title}
            </Typography>

            <Box
               sx={{
                    textAlign:'center',
               }}
            >
                <img
                    src= {imgTable(photoName)}
                    width= {"100%"}
                />
            </Box>

            <Typography
                variant="body2" 
                color="text.primary"
            >
                 {content}
            </Typography>

            <Box
            >
                <IconButton href={url[0]} target="_blank" size={'large'}>
                    <GitHub />
                </IconButton>

                <Button href={url[1]} target="_blank" variant="container" sx={{
                    ml:'2vw',
                    bgcolor: '#38d13b',
                    color: '#eee',
                    '&:hover': {
                        bgcolor: '#2fb532'
                    },
                }}>
                    Go
                </Button>
            </Box>
           
            
        </Stack>
    )
}
