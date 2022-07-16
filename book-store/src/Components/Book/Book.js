import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Book.css'
const Book = (props) => {

    const history = useNavigate()
    const {_id,name,price,author,available,description,image} = props.book

    const handleDelete = async() => {
        await axios.delete(`http://localhost:5000/books/${_id}`).then( res => res.data ).then( () => history('/') ).then( () => history('/books') )
    }

  return (
    <div className='card'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <article><i>By :- {author}</i></article>
        <p><i>Description :- {description}</i></p>
        <h4>&#8377; {price}</h4>
        <Button LinkComponent={Link} to={`/books/${_id}`} color='inherit' sx={{mt:"auto" , background:"#bdbdbd" , marginBottom:"2px"}}>Update</Button>
        <Button onClick={handleDelete} color='error' sx={{background:"#bdbdbd"}}>Delete</Button> 
    </div>
  )
}

export default Book