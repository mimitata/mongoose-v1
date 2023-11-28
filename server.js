const express=require('express')
const mongoose=require('mongoose')

const app=express()
const port=5000
app.use(express.json())

mongoose.connect('mongodb+srv://mimi:mimi@cluster0.umwdvjx.mongodb.net/f3?retryWrites=true&w=majority').then(()=>console.log('DB connected'))
app.use('/',require('./routes/clientRoute.js'))

app.listen(port,(err)=>{err?console.log(err):console.log("server is running in port",port)})