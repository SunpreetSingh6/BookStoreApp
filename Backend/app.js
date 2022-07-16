// console.log("Hello World :) ")

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// Middlewares
app.use(express.json())
app.use(cors())
app.get('/' , (req,res,next)=>{
    res.send("This is a starting page")
})
app.use('/books' , require('./Routes/Book-routes'))

mongoose.connect("mongodb+srv://admin:BookStoreAdmin@cluster0.ke0ai.mongodb.net/bookStore?retryWrites=true&w=majority"
                    ).then(() => console.log("Connected Sucessfully")
                            ).then(() => app.listen(5000)
                                    ).catch((err) => console.log(err))