import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../model/User.js";

// authenticating using Passport

passport.use(new LocalStrategy({
    usernameField:"email"   
    },
    // finding user estabilished identity
    async (email,password,done)=>{
        const user =await User.findOne({email:email})
        if(!user){
            console.log("ERROR",err)
            return done(null,false)
        }
        if(user.password===password){
            console.log(" authentication successful")
            return done(null,user)
        }

        return done(null,false)
    }
))


//serialize the user, decide the key to be set in cookie
passport.serializeUser(function(user,done){
    console.log("searialize",user)
    done(null,user._id)
})

//desearialize user
passport.deserializeUser(async function(id,done){
    console.log("de-searialize",id)

   const user=await User.findById(id)
   if(user){
    return done(null,user)
   }
   return done(null,false);
})

//check if user is authenticated (this will be used as middleware)
passport.checkAuthentication = function(req,res,next){
    console.log('is authenticated')
    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/login')
}

passport.setAuthenticatedUser = function(req,res,next){
    console.log("setAuthenticated",req.user)

    if(req.isAuthenticated()){
        res.locals.user=req.user
    }
    next()
}
export default passport