import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { DoubleArrow } from '@mui/icons-material'
import { FaJava, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiCplusplus, SiReact, SiC, SiTypescript, SiCsharp, SiGnubash } from 'react-icons/si'
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb'
import Fade from 'react-reveal/Fade';

export default function Skill() {

  const MyBox = styled(Box)(({ theme }) => ({
    width: '14%',
    height: '14%',
    padding: '8px',
    gap: '2px',
    backgroundColor: theme.palette.primary.dark,
    fontSize: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eee',
    transition: '0.4s all',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
    '&:hover': {
      backgroundColor: '#eee',
      color: theme.palette.primary.dark,
      transform: 'translateY(-8px)'
    }
  }))

  return (
    <Box id='skill'
      sx={{
        width: '100%',
        height: { xs: '200vh', sm: '100vh' },
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
        height: '100vh',
        width: { xs: "100%", sm: '55%' },
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Fade bottom>
          <Box gap={7}
            sx={{
              height: '80%',
              width: "80%",
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignContent: 'space-evenly',
              marginLeft: '10%'
            }}
          >
            <MyBox>
              <FaJava />
              <Typography variant='h5'>Java</Typography>
            </MyBox>

            <MyBox>
              <SiCplusplus />
              <Typography variant='h5'>C++</Typography>
            </MyBox>

            <MyBox>
              <SiReact />
              <Typography variant='h5'>React</Typography>
            </MyBox>

            <MyBox>
              <SiTypescript />
              <Typography variant='h5'>TS</Typography>
            </MyBox>

            <MyBox>
              <SiCsharp />
              <Typography variant='h5'>C#</Typography>
            </MyBox>

            <MyBox>
              <TbBrandJavascript />
              <Typography variant='h5'>JS</Typography>
            </MyBox>

            <MyBox>
              <TbBrandHtml5 />
              <Typography variant='h5'>HTML</Typography>
            </MyBox>

            <MyBox>
              <TbBrandCss3 />
              <Typography variant='h5'>CSS</Typography>
            </MyBox>

          

            <MyBox>
              <SiC />
              <Typography variant='h5'>C</Typography>
            </MyBox>

            

            <MyBox>
              <FaGitAlt />
              <Typography variant='h5'>Git</Typography>
            </MyBox>

            
            <MyBox>
              <FaPython />
              <Typography variant='h5'>Python</Typography>
            </MyBox>
            <MyBox>
              <SiGnubash />
              <Typography variant='h5'>Bash</Typography>
            </MyBox>
          </Box>
        </Fade>
      </Box>
    </Box>
  )
}
