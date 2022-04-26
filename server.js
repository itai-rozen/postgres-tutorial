const express = require('express')
const cors = require('cors')
const pool = require('./db.js')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/todos', async (req,res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(`INSERT INTO todos (description) VALUES('${description}');`)
    // const newTodo = await pool.query(`INSERT INTO todos (description) VALUES($1)`, [description])
    res.send(description)
  } catch(err){
    res.send(err.message)
  }
})

app.get('/todos', async (req,res) => {
  try {
    const todos = await pool.query('SELECT * FROM todos')
    res.send(todos.rows)
  }catch(err){
    res.send(err.message)
  }
})

app.delete(`/todos/:id`, async (req,res) => {
  try {
    const { id } = req.params
    await pool.query(`DELETE FROM todos WHERE todo_id = ${id}`)
    res.send('deleted succesfully')
  }catch(err){
    res.send(err.message)
  }
})
app.listen(5000, () => console.log('listening...'))