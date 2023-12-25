import Express from "express";
import { home, loginUser, signup } from "../controllers/homeController.js";
import passport from "passport";

const Router =Express.Router()

Router.get('/',home)
Router.post('/login',passport.authenticate('local'),loginUser)
Router.post('/register',signup)

export default Router