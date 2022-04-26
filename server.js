const express = require('express')
const cors = require('cors')
const app = express()
const todoRoutes = require('./routes/todosRoutes')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/todos', todoRoutes)



app.listen(5000, () => console.log('listening...'))