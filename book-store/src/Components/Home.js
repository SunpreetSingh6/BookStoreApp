import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h2' sx={{marginTop:'100px' , fontFamily:'cursive'}}>Home Page</Typography>
        <Button LinkComponent={Link} to='/books' variant='contained' color='success' sx={{marginTop:'50px' , background:'#e63900'}} >View All Books</Button>
      </Box>
    </>
  )
}

export default Home