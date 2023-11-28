const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/Users')
const app = express()

const mongoUrl='mongodb+srv://ngaboart123:sevelin123@cluster0.hxpxs7e.mongodb.net/learn?retryWrites=true&w=majority'

mongoose.connect(mongoUrl).then(()=>{
    console.log('mongo deb are connected')
})


app.use(express.json())

app.post('/insert',async (req,res)=>{
    try {
        
    await Users.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then((response)=>{
        res.json('user inseryed')

    })
        
    } catch (error) {
        console.log(error.message)
        
    }


    

})


app.listen(4000,(req,res)=>{
    console.log('app are running on port 4000')
})