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
        height: { xs: '200vh', sm: '100vh' },
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >

      <Box
        sx={{
          height: { xs: '100vh', sm: '100%' },
          width: { xs: '100%', sm: "45%" },
          bgcolor: 'primary.dark',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '70%',
            width: '80%',
            justifyContent: 'space-between'
          }}
        >
          <Fade left>
            <Avatar src={photo} sx={{
              width: '250px',
              height: '250px',
              marginBottom:"30px"
            }} />

            <Typography variant={'h6'} sx={{
              marginBottom: '10vh',
              textAlign: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: '500'
            }}>
               {aboutme.description}
            </Typography>
          </Fade>

          <DoubleArrow sx={{
            transform: 'rotate(90deg)',
            fontSize: '45px',
            color: 'white',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '30px',
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

        </Box>
      </Box>
      <Box
        sx={{
          height: { xs: '100vh', sm: '100%' },
          width: { xs: '100%', sm: "55%" },
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Box sx={{
          width: '80%',
          height: '75%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
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
