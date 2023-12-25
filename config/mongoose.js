import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:rootroot@assessments.os5t7uu.mongodb.net/?retryWrites=true&w=majority")

const db=mongoose.connection

db.on('error',console.error.bind(console,'error connecting to DB'))

db.once('open',()=>{
    console.log("Successfully connected to DB")
})

export default db