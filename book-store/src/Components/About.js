import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{ fontFamily:'fantasy' , marginTop:'100px' }} variant='h2'>
            BookStore CRUD App build using MERN stack
        </Typography>
        <Typography sx={{ fontFamily:'inherit' , marginTop:'30px' }} variant='h4'>Build by Sunpreet Singh as a college project</Typography>
        <Typography sx={{ marginTop:'50px' }}>Name :- Sunpreet Singh</Typography>
        <Typography>Contact No :- 8375XXXX57</Typography>
        <Typography>Email :- ssunpreet1999@gmail.com</Typography>
        <Typography>GitHub :-  <a href="https://github.com/SunpreetSingh6">https://github.com/SunpreetSingh6</a></Typography>

      </Box>
    </div>
  )
}

export default About