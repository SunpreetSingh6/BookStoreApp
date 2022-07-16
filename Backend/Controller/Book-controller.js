const { findByIdAndRemove } = require("../Model/Book");
const Book = require("../Model/Book")

getAllBooks =  async(req,res)=>{
    let books;
    try{
        books = await Book.find()
    }catch(err){
        console.log(err)
    }

    if(!books)
    {
        res.status(404).json({message:"No books found"})
    }
    return res.status(200).json({books})
}

addBook = async (req,res) =>{
    const {name , author , description , price , available , image} = req.body
    let book;
    try{
        book = new Book({
            name : name , 
            author : author,
            description : description,
            price : price,
            available : available,
            image : image
        })
        await book.save()
    }catch(err){
        console.log(err)
    }

    if(!book)
    {
        return res.status(500).json({meassage: "Unable to add"})
    }
    return res.status(201).json({book})
}

getById = async (req,res)=>{
    const id = req.params.id
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err)
    }

    if(!book)
    {
        return res.status(404).json({meassage:"No book found"})
    }
    return res.status(200).json({book})
}

updateBook = async (req,res)=>{
    const id = req.params.id
    const {name , author , description , price , available , image} = req.body
    let book
    try{
        book = await Book.findByIdAndUpdate(id , {
            name : name , 
            author : author,
            description : description,
            price : price,
            available : available,
            image: image
        })
        book = await book.save() // saving book
    }catch(err){
        console.log(err)
    }

    if(!book)
    {
        return res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({book})
}

deleteById = async (req,res)=>{
    id = req.params.id
    let book 
    try{
        book =  await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!book)
    {
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({book})

} 
exports.addBook = addBook
exports.getAllBooks = getAllBooks
exports.getById = getById
exports.updateBook = updateBook
exports.deleteById = deleteById