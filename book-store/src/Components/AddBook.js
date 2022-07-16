import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {

  const history = useNavigate();

  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    image: '',
  })

  const [checked, setchecked] = useState(false)

  const handleChange = (e) => {
    setInput((prevState) => ({...prevState,[e.target.name]: e.target.value}))
    // console.log(e.target.name," value ",e.target.value)
  }

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/books" , {
      name: String(input.name) ,
      description: String(input.description),
      price: Number(input.price),
      author: String(input.author),
      image: String(input.image),
      available: Boolean(checked)
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then( () => history('/books') )
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Box display='flex' flexDirection='column' justifyContent='center' maxWidth={700} marginLeft="auto" marginRight="auto" marginTop={3}>
        {/* <Box maxWidth={800} marginLeft="auto" marginRight="auto" marginTop={5}> */}
        <FormLabel>Name</FormLabel>
        <TextField value={input.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
        <FormLabel>Author</FormLabel>
        <TextField value={input.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
        <FormLabel>Description</FormLabel>
        <TextField value={input.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
        <FormLabel>Image</FormLabel>
        <TextField value={input.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
        <FormLabel>Price</FormLabel>
        <TextField value={input.price} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price' />
        <FormControlLabel control={<Checkbox checked={checked} onChange={ ()=>setchecked(!checked) } />} label="Available" /><br />
        <Button type='submit' variant='contained' color='success'>Add book</Button>
      </Box>
    </form>
  )
}

export default AddBook