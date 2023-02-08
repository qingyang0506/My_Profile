import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Email, GitHub, LinkedIn } from '@mui/icons-material'
import { SiReact } from 'react-icons/si'
import { TbBrandCss3 } from 'react-icons/tb'

export default function Footer() {

  const iconStyle = {
    fontSize: '1.4em',
    color: 'primary.main'
  }
  return (
    <Box
      sx={{
        display:'flex',
        width: '100%',
        // height: {xs:"20vh",sm:'10vh'},
        bgcolor: '#eee',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:0.5
      }}
    >
      <Box
        sx={{
          // height: '80%',
          width: {xs:"100%",sm:'35%'},
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            // height: '100%',
            width: '85%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <IconButton href="https://www.facebook.com/profile.php?id=100040586693552" target="_blank">
            <Facebook sx={iconStyle} />
          </IconButton>

          <IconButton href="mailto:1565134797qq@gmail.com" target="_blank">
            <Email sx={iconStyle} />
          </IconButton>

          <IconButton href="https://github.com/qingyang0506?tab=repositories" target="_blank">
            <GitHub sx={iconStyle} />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/qingyang-li-372899209/" target="_blank">
            <LinkedIn sx={iconStyle} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: '80%',
          width: '25%',
          display: {xs:"none",sm:"flex"},
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{
          fontSize: "1.1em",
          color: 'primary.main'
        }}>
          Made using
        </Typography>
        <Box sx={{
          marginLeft: '1em',
          fontSize: '1.3em',
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
