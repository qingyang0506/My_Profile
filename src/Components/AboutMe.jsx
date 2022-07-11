import { Box, Avatar, Typography } from '@mui/material'
import React from 'react'
import photo from '../img/avatar.jpeg'
import { DoubleArrow, EmojiEvents } from '@mui/icons-material'
import Fade from 'react-reveal/Fade';


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
              A third-year student specializing in software engineering at the University of Auckland.
              Great interest in software development, data analysis and graphic design.
              I am a hardworking and motivated person who has developed a mature
              and responsible approach to any task that I undertake.
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
          height: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>

          <Fade right>
            <Typography variant='h4' color={'white'} fontSize="40px" fontWeight={800}>
              Achievement
            </Typography>

            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
            >
              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                The first-place scholarships with $5000 in UP Foundation Education,2020
              </Typography>
            </Box>

            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
            >
              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                First-in-course Awards in ENGSCI 111,2021
              </Typography>
            </Box>

            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
            >
              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                New Zealand Programming Contest, 2021 – First place
              </Typography>
            </Box>

            <Box gap={3} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
            >
              <EmojiEvents sx={{
                color: 'yellow',
                fontSize: '30px'
              }} />
              <Typography fontSize={'18px'} color="white" fontWeight={600}>
                Southern Pacific Programming Contest Honourable Mention,2021
              </Typography>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  )
}
