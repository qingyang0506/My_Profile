import { Box, Typography, styled ,Grid} from '@mui/material'
import React from 'react'
import { DoubleArrow } from '@mui/icons-material'
import Fade from 'react-reveal/Fade';
import skill from "../Data/skill.json"
import { SkillCard } from './SkillCard';

export default function Skill() {
  return (
    <Box id='skill'
      sx={{
        width: '100%',
        // height: { xs: '200vh', sm: '100vh' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >

      <Box sx={{
        height: '100vh',
        width: { xs: '100%', sm: "45%" },
        bgcolor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box
          sx={{
            height: '85%',
            width: '50%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >

          <DoubleArrow sx={{
            transform: 'rotate(-90deg)',
            fontSize: '45px',
            color: 'primary.dark',
            alignSelf: 'center',
            position: 'absolute',
            top: 0,
            '&:hover': {
              cursor: 'pointer'
            }
          }}
            onClick={() => {
              let anchorElement = document.getElementById("aboutme")
              if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: 'smooth' })
              }
            }} />
          <Fade top>
            <Box>
              <Typography variant='h2' fontSize={'58px'} fontWeight={800} color={'primary.dark'} textAlign="center">
                Skills
              </Typography>
              <Typography variant='h6' textAlign={'center'}>
                My technical skills, Ordered by proficiency
              </Typography>
            </Box>
          </Fade>

          <DoubleArrow sx={{
            transform: 'rotate(90deg)',
            fontSize: '45px',
            color: 'primary.dark',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 0,
            '&:hover': {
              cursor: 'pointer'
            }
          }}
            onClick={() => {
              let anchorElement = document.getElementById("Project")
              if (anchorElement) {
                anchorElement.scrollIntoView({ behavior: 'smooth' })
              }
            }} />

        </Box>

      </Box>

      <Box sx={{
        // height: '100vh',
        width: { xs: "100%", sm: '55%' },
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Fade bottom>
            <Grid 
              container 
              padding={6}
            >
               {skill.skills.map( (text,index) => (
                   <Grid item xs={6} sm={4} key={index}>
                      <SkillCard text={text}/>
                   </Grid>
               ))}
            </Grid>
        </Fade>
      </Box>
    </Box>
  )
}
