require('dotenv').config()//attach those environment for us in the object

const express = require('express')

//express app 
const app = express() 

//Middleware, we need the next to go on to the next middleware
// this middleware help us log all the request that are coming.
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//req = respond to request of the object, res = send out response to then browser
app.get('/', (req,res) =>{
    res.json({msg: 'Welcome to the app'}) //send a json string for us
})

//listen for requests
//use process.env to access the file from the env file(hidden file)
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)

})

