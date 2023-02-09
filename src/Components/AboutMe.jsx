import { Box, Avatar, Typography } from '@mui/material'
import React from 'react'
import photo from '../img/avatar.jpeg'
import { DoubleArrow} from '@mui/icons-material'
import { AchievementItem } from './AchievementItem'
import Fade from 'react-reveal/Fade';
import aboutme from "../Data/aboutme.json"

export default function AboutMe() {
  return (
    <Box id="aboutme"
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >

      <Box
        sx={{
         
          width: { xs: '100%', sm: "45%" },
          bgcolor: 'primary.dark',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding:5,
            gap:5
          }}
        >
          <Fade left>
            <Avatar src={photo} sx={{
              width: '11em',
              height: '11em',
            }} />

            <Typography variant={'h6'} sx={{
              textAlign: 'center',
              color: 'white',
              fontSize: '1.2em',
              fontWeight: '500'
            }}>
               {aboutme.description}
            </Typography>
            <DoubleArrow sx={{
              transform: 'rotate(90deg)',
              fontSize: '3em',
              color: 'white',
              alignSelf: 'center',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() => {
              let anchorElement = document.getElementById("skill")
              if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: 'smooth' })
              }
            }} />
          </Fade>
        </Box>
      </Box>
      <Box
        sx={{
          height:"100vh",
          width: { xs: '100%', sm: "55%" },
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Box sx={{
          width: '80%',
          height: '75%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding:4
        }}>

          <Fade right>
            <Typography 
              variant='h3' 
              color={'white'} 
              fontSize="2em" 
              fontWeight={600}
              >
              Achievement
            </Typography>
            {
              aboutme.achievements.map( text => (
                  <AchievementItem text={text}/>
              ))
            }
          </Fade>
        </Box>
      </Box>
    </Box>
  )
}
