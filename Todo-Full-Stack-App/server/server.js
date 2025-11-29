require('dotenv').config();
const PORT = process.env.PORT || 8000;
const express = require('express');
const {v4: uuidv4} = require('uuid')
const app = express()
const pool = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// get all todos
app.get('/todos/:userEmail', async (req, res)=>{
    // const userEmail = 'mastooraturkmen@gmail.com';
    const userEmail = req.params.userEmail;
    try {
       const todos = await pool.query('SELECT * FROM todos where user_email = $1', [userEmail])
       res.status(200).json(todos.rows)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'})
    }
})


// create a new todo
app.post('/todos', async (req, res)=>{
    const {user_email, title, progress, date}= req.body;
    console.log(user_email, title, progress, date)
    const id = uuidv4()
    try {
        const newTodo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
            [id, user_email, title, progress, date]
        )
        res.json(newTodo)
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})