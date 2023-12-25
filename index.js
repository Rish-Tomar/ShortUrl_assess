import express from "express";
import mongoose from "mongoose";
import db from "./config/mongoose.js";

import Routes from './Routes/homeRoutes.js'

// passport authentication
    import passport from "passport";
    import passportLocal from './config/passportLocal.js'

const app = express()

const PORT = 8005

// adding Routes
app.use('/',Routes)

// server listening function
app.listen(PORT, (err)=>{
    if(err){
        console.log('err',err)
    }
    console.log(`server is running at port ${PORT}`)
}) 