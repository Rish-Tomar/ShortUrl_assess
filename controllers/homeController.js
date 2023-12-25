import User from "../model/User.js"


const home =(req,res)=>{
    return res.status(201).json({
        message:"you entered Home Page "
    })
}

const signup =async (req,res)=>{
    console.log('signup user details',req.body)
    const user = await User.findOne({email:req.body.email})

    if(user){
        console.log('User already exists')
        return res.redirect('back')
    }
    const created=await User.create(req.body)
    if(created){
        return res.redirect('/login')
    }
    console.log('cannot be created')  
    return res.redirect('back') 
}

const loginUser =(req,res)=>{
    res.status(200).json({message:"success"})
}

export {home,loginUser,signup}