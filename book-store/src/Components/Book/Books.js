import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Book from './Book'
import './Book.css'
URL = "http://localhost:5000/books"
const fetchHandler = async () =>{
  return await Axios.get(URL).then((res)=> res.data)
}

const Books = () => {

  const [books, setBooks] = useState()

  useEffect(() => {
      fetchHandler().then((data)=>setBooks(data.books))
  } ,[]);
  console.log(books)

  return (
    <div>
      <ul>
        {books && books.map((book)=>{
            return <li className='book'>
              <Book book={book} />
            </li>
          }) 
        }
      </ul>
    </div>
  )
}

export default Books