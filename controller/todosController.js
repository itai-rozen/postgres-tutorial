const pool = require('./../db.js')
const todoController = {}

todoController.addTodo = async (req,res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(`INSERT INTO todos (description) VALUES('${description}');`)
    // const newTodo = await pool.query(`INSERT INTO todos (description) VALUES($1) RETURNIN *`, [description])
    res.send(newTodo.rows[0])
  } catch(err){
    res.send(err.message)
  }
}

todoController.getTodos = async (req,res) => {
  try {
    const todos = await pool.query('SELECT * FROM todos')
    res.send(todos.rows)
  }catch(err){
    res.send(err.message)
  }
}

todoController.getSingleTodo = async (req,res) => {
  try {
    const { id } = req.params
    const todo = await pool.query(`SELECT * FROM todos WHERE todo_id = ${id}`)
    res.send(todo.rows[0])
  }catch(err){
    res.send(err.message)
  }
}

todoController.deleteTodo = async (req,res) => {
  try {
    const { id } = req.params
    await pool.query(`DELETE FROM todos WHERE todo_id = ${id}`)
    res.send('deleted succesfully')
  }catch(err){
    res.send(err.message)
  }
}

todoController.updateTodo = async (req,res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    await pool.query('UPDATE todos SET description = $1 WHERE todo_id = $2', [description,id])
    res.send("updated successfully")
  } catch(err){
    res.send(err.message)
  }
}

module.exports = todoController
