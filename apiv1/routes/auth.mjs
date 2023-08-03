// Api related to authentication like login and sign up 
import express from 'express'

let router = express.Router(); //creates a new instance of the router 

// Data is sent to the server in login or signup we use post 
router.post('/login', (req, res, next)=>{
    res.send('Login Page of V1');
})
router.post('/signup', (req, res, next)=>{
    res.send('Signup Page of V1');
})

export default router; //Exporting Router