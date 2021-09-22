const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('./routes/index'))

const { URL } = process.env

async function start () {
  try{
    await mongoose.connect(URL)
    app.listen(process.env.PORT, ()=> {
      console.log("Server has been PORT " + process.env.PORT)
    })
  } catch (e) {
    console.log(e)
  }
}
start()