import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Email, GitHub, LinkedIn, DoubleArrow } from '@mui/icons-material'
import Zoom from 'react-reveal/Zoom';
import '../App.css'


const buttonStyle = {
    textAlign:'center',
    width:{xs:'17em',sm:'12em'}
}

export default function Greeting() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'space-around'
      }}
    >
      
      <Zoom>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '14%',
            p:"5%",
            justifyContent: 'space-between',
            alignItem:"center",
            height: { xs: '70%', sm: '45%' },
          }}
        >
          <Box>
            <Typography
                  variant= "h2"
                  fontWeight={600}
                  textAlign="center"
                  fontSize={"2.8rem"}
                  sx={{
                      background: 'linear-gradient(to right, #88d3ce 0%, #6e45e2 100%)',
                      backgroundClip: "text",
                      color: "transparent"
                  }}
              >
                  Welcome to  my  profile!
            </Typography>
          </Box>

          <Box>
            <Typography variant='h3' color="black" textAlign={'center'}
              sx={{
                fontSize: { xs: "1.3em", sm: '1.7em' }
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
              alignItems:'center',
              gap: 2.5,
            }}
          >
            <Button 
               variant='contained' 
               size='large' startIcon={<Facebook />} 
               href="https://www.facebook.com/profile.php?id=100040586693552" 
               target="_blank"
               sx={buttonStyle}
            >
              FaceBook
            </Button>
            <Button 
              variant='contained' 
              size='large' 
              startIcon={<Email />} 
              href="mailto:1565134797qq@gmail.com" 
              target="_blank"
              sx={buttonStyle}
              >
              Email
            </Button>
            <Button 
              variant='contained'
              size='large' 
              startIcon={<GitHub />} 
              href="https://github.com/qingyang0506?tab=repositories" 
              target="_blank"
              sx={buttonStyle}
              >
              GitHub
            </Button>
            <Button 
              variant='contained' 
              size='large' 
              startIcon={<LinkedIn />} 
              href="https://www.linkedin.com/in/qingyang-li-372899209/" 
              target="_blank"
              sx={buttonStyle}
              >
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
