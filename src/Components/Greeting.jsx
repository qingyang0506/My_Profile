import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Email, GitHub, LinkedIn, DoubleArrow } from '@mui/icons-material'
import Zoom from 'react-reveal/Zoom';
import ParticleBackground from './ParticleBackground'
import '../App.css'


export default function Greeting() {
  return (

    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ParticleBackground />
      <Zoom>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30%',
            justifyContent: 'space-around',
            height: { xs: '70%', sm: '40%' },
          }}
        >
          <Box
            sx={{
              height: '80px',
              color: "primary.main",
              textAlign: 'center',
              fontSize: { xs: '36px', sm: '52px' },
              fontWeight: '800',
              width: '100%',
              marginBottom: { xs: '18px', sm: '0px' },
              position: 'relative'
            }}
          >
            Welcome to  my  profile!
          </Box>
          <Box>
            <Typography variant='h1' color="black" fontWeight={'1000'} textAlign={'center'}
              sx={{
                fontSize: { xs: "20px", sm: '28px' }
              }}
            >
              <span className="Name">Hi! I'm QingYang Li</span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              gap: 2,
              marginTop: '10px'
            }}
          >
            <Button variant='contained' size='large' startIcon={<Facebook />} href="https://www.facebook.com/profile.php?id=100040586693552" target="_blank">
              FaceBook
              {/* <Facebook/> */}
            </Button>
            <Button variant='contained' size='large' startIcon={<Email />} href="mailto:1565134797qq@gmail.com" target="_blank">
              Email
            </Button>
            <Button variant='contained' size='large' startIcon={<GitHub />} href="https://github.com/qingyang0506?tab=repositories" target="_blank">
              GitHub
            </Button>
            <Button variant='contained' size='large' startIcon={<LinkedIn />} href="https://www.linkedin.com/in/qingyang-li-372899209/" target="_blank">
              LinkedIn
            </Button>
          </Box>
          <DoubleArrow sx={{
            transform: 'rotate(90deg)',
            fontSize: '45px',
            color: 'primary.main',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '30px',
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
        </Box>
      </Zoom>
    </Box>
  )
}
