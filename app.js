const express = require('express')
const dotEnv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./server/database/connection')
const app = express()
dotEnv.config()

//log requests
app.use(morgan(`tiny`))
// mongodb connectin 
connectDB()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use('/', require('./server/routers/routes'))
//
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on http://localhost:${process.env.PORT}`);
  
}) 