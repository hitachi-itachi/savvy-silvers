require('dotenv').config()//attach those environment for us in the object

const express = require('express')
const workoutRoutes = require('./routes/workout')
const { default: mongoose } = require('mongoose')

//express app 
const app = express() 


//Middleware, we need the next to go on to the next middleware
// this middleware help us log all the request that are coming.
app.use(express.json())//receive and passses it to the req object
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//req = respond to request of the object, res = send out response to then browser
//routes
app.use('/api/workouts',  workoutRoutes) // this mean if we fire a req here then we fire this function here.
app.get('/', (req,res) =>{
    res.json({msg: 'Welcome to the app'}) //send a json string for us
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
//use process.env to access the file from the env file(hidden file)
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)

})

}) 
.catch((error) => {
    console.log(error)
})


