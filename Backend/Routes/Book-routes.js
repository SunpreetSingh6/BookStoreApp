const express = require('express')
const router = express.Router()
const bookController = require('../Controller/Book-controller')

router.get('/' , bookController.getAllBooks)
router.post('/' , bookController.addBook)
router.get('/:id' , bookController.getById)
router.put('/:id' , bookController.updateBook)
router.delete('/:id' , bookController.deleteById)

module.exports = router