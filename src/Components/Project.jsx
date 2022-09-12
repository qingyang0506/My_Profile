import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card/Card'
import photo1 from "../img/kemu.png"
import photo2 from "../img/DigimonSearch.png"
import photo3 from "../img/profile.png"
import photo4 from '../img/tankBattle.png'

export default function Project() {
  return (
    <Box id='Project'
      sx={{
        width: '100%',
        height: { xs: '200vh', sm: '100vh' },
        position: 'relative',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >

      <Box sx={{
        position: 'absolute',
        top: '3%'
      }}>
        <Typography variant='h3' color={'#eee'} fontSize={'48px'} fontWeight={400}>
          Project
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          height: '80%',
          width: '80%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          justifyContent: { xs: 'space-around', sm: 'space-around' },
          alignContent: { xs: 'center', sm: 'space-between' }
        }}
      >
        <Card path={{
          title: 'Kemu-Kupu',
          content: `
           Kēmu Kupu is a javaFX application that tests the user on spelling Maori words from a GUI.
           This software project aims to help children aged 8-15 learn more about Maori words
           and their spelling.`,
          url: ["https://github.com/qingyang0506/Kemu-Kupu","https://github.com/qingyang0506/Kemu-Kupu"],
          photo: { photo1 },
          photoName: 'photo1'
        }} />

        <Card path={{
          title: 'Digimon Search',
          content: `
          This is a React Typescript project with a REST API that allows you to search for digimon. 
          You can search for a digimon by name,or level. What's more, you also can sort them by their name or level. 
          You can see some names and levels example by clicking the help button in the project
             `,
          url: ["https://github.com/qingyang0506/Digimon_Search_2.0","https://qingyang0506.github.io/Digimon_Search_2.0/"],
          photo: { photo2 },
          photoName: 'photo2'
        }} />

        <Card path={{
          title: 'My profile page',
          content: `
            My personal profile web page.Developed with reactJS and material Ui,hosted by Github
           `,
          url: ["https://github.com/qingyang0506/My_Profile","https://qingyang0506.github.io/My_Profile/"],
          photo: { photo3 },
          photoName: 'photo3'
        }} />

        <Card path={{
          title: 'Tank Battle',
          content: `
            Using C# and winform develop a tradition and simple game 'battle city'.This game only 
            run on window system and microsoft visual studio software.
            `,
          url: ["https://github.com/qingyang0506/TankBattle","https://github.com/qingyang0506/TankBattle"],
          photo: { photo4 },
          photoName: "photo4"
        }} />
      </Box>
    </Box>
  )
}
