import express from 'express';
let router = express.Router();

router.get('/feeds', (req,res,next)=>{
    res.send('(Response of V2) All post of Ever User');
})
router.get('/feed/:postId', (req,res,next)=>{
    res.send('(Response of V2) All post of Specific User');
})

export default router