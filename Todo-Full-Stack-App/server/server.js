require('dotenv').config();
const PORT = process.env.PORT || 8000;
const express = require('express');
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

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})