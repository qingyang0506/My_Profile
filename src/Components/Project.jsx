import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade';
import Card from './Card/Card'
import project from "../Data/project.json"

export default function Project() {
  return (
    <Box id='Project'
      sx={{
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center'
      }}
    >
      <Fade bottom>
        <Box>
          <Typography 
            variant='h3' 
            color={'#fff'} 
            fontSize={'3.5em'} 
            fontWeight={600}
            mt={3}
            mb = {2}
          >
            Project
          </Typography>
        </Box>

        <Box
          sx={{
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
          }}
        > 
          <Grid
            container
            spacing = {8}
            padding = {3}
            sx={{
              width:{xs:"95%",sm:"85%"},
            }}
            
          >
            {
              project.projects.map((item,index) =>(
                  <Grid item xs = {12} sm = {6} key = {index} 
                  >
                      <Card {...item} index = {index}/>
                  </Grid>
              ))
            }

          </Grid>
        </Box>
      </Fade>
    </Box>
  )
}
