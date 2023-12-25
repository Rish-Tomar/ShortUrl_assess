import mongoose, { Mongoose } from 'mongoose'

const UrlSchema =new Mongoose.UrlSchema({
    urlId:{
        type:String,
        required:true
    },
    originalURL:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    }
})

export default mongoose.model('Url',UrlSchema)