const PORT = 8000
const express = require("express")
const app = express()


app.get('/', (req, res) =>{
    res.send('hello worlds')
})

app.get('/users', (req, res)=>{
    res.send('all user data')
})

app.get('/users/:userId', (req, res)=>{
    console.log(req.params.userId)
    res.send(req.params.userId)
})