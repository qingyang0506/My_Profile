import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Email, GitHub, LinkedIn } from '@mui/icons-material'
import { SiReact } from 'react-icons/si'
import { TbBrandCss3 } from 'react-icons/tb'

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '10vh',
        bgcolor: '#eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          height: '80%',
          width: '35%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '85%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <IconButton href="https://www.facebook.com/profile.php?id=100040586693552" target="_blank">
            <Facebook sx={{
              fontSize: '35px',
              color: 'primary.main'
            }} />
          </IconButton>

          <IconButton href="mailto:1565134797qq@gmail.com" target="_blank">
            <Email sx={{
              fontSize: '35px',
              color: 'primary.main'
            }} />
          </IconButton>

          <IconButton href="https://github.com/qingyang0506?tab=repositories" target="_blank">
            <GitHub sx={{
              fontSize: '35px',
              color: 'primary.main'
            }} />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/qingyang-li-372899209/" target="_blank">
            <LinkedIn sx={{
              fontSize: '35px',
              color: 'primary.main'
            }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: '80%',
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{
          fontSize: "18px",
          color: 'primary.main'
        }}>
          Made using
        </Typography>
        <Box sx={{
          marginLeft: '10px',
          fontSize: '25px',
          color: 'primary.main',
          display: 'flex',
        }}>
          <SiReact />
          <TbBrandCss3 />
          <Typography>&nbsp; Qingyangli</Typography>
        </Box>
      </Box>

    </Box>
  )
}
