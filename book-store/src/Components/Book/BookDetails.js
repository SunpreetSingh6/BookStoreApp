import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'

const BookDetails = () => {

    const [input, setInput] = useState({})
    const [checked, setChecked] = useState(false)
    const history = useNavigate()

    const id = useParams().id
    // console.log(id)

    useEffect(() => {

        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/books/${id}`).then( res => res.data ).then( data => setInput(data.book) )
        };

        fetchHandler();

    }, [id]);

    const sendRequest = async() =>{
        await axios.put(`http://localhost:5000/books/${id}` , {
            name: String(input.name) ,
            description: String(input.description),
            price: Number(input.price),
            author: String(input.author),
            image: String(input.image),
            available: Boolean(checked)
          }).then(res => res.data)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        sendRequest().then( () => history('/books'))
    }

    const handleChange = (e) =>{
        setInput( (prevState) => ({
            ...prevState , [e.target.name] : e.target.value
        }))
    }

    return (
        <>
            { input && <form onSubmit={handleSubmit}>
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
                    <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" /><br />
                    <Button type='submit' variant='contained' color='success'>Update book</Button>
                </Box>
            </form>}
        </>
    )
}

export default BookDetails