import {EmojiEvents} from '@mui/icons-material'
import {Box,Typography} from "@mui/material"

export const AchievementItem = ({text}) =>{
    return (
        <Box gap={2} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
          >
            <EmojiEvents sx={{
              color: 'yellow',
              fontSize: '1.5em'
            }} />
            <Typography fontSize={'1.2em'} color="white" fontWeight={400}>
               {text}
            </Typography>
          </Box>
    )
}