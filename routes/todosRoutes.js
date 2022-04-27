const express = require('express')
const router = express.Router()
const { addTodo, deleteTodo, getTodos, getSingleTodo, updateTodo } = require('./../controller/todosController') 

router.post('/', addTodo)

router.get('/', getTodos)

router.get('/:id', getSingleTodo)

router.delete(`/:id`, deleteTodo)

router.put('/:id', updateTodo)
module.exports = router