import {Typography,Box,styled} from "@mui/material"
import { FaJava, FaGitAlt, FaPython} from 'react-icons/fa'
import { SiCplusplus, SiReact, SiC, SiTypescript, SiCsharp, SiGnubash,SiKotlin } from 'react-icons/si'
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb'


const MyBox = styled(Box)(({ theme }) => ({
    padding: '0.2em',
    gap: '0.1em',
    backgroundColor: theme.palette.primary.dark,
    fontSize: '3em',
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
    }
  }))

const iconTable = (keyWord) => {
    if(keyWord  === "Java"){
       return <FaJava/>
    }else if(keyWord === "C++"){
       return <SiCplusplus/>
    }else if(keyWord === "C"){
       return <SiC/>
    }else if(keyWord ==="Python"){
        return <FaPython/>
    }else if(keyWord === "Bash"){
        return <SiGnubash/>
    }else if(keyWord === "Git"){
        return <FaGitAlt/>
    }else if(keyWord === "React"){
        return <SiReact/>
    }else if(keyWord ==="TS"){
        return <SiTypescript/>
    }else if(keyWord === "JS"){
        return <TbBrandJavascript/>
    }else if(keyWord === "C#"){
        return <SiCsharp/>
    }else if(keyWord === "Kotlin"){
        return <SiKotlin/>
    }else if(keyWord ==="HTML"){
        return <TbBrandHtml5/>
    }
}

export const SkillCard = ({text}) =>{
    return (
        <MyBox>
            {iconTable(text)}
            <Typography variant='h5'>{text}</Typography>
        </MyBox>
    )
}