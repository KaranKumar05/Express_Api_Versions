import express from 'express';
let router = express.Router();


router.get('/post/:postId', (req,res,next)=>{
    res.send('(Response form V2) Specific post of Specific user')
})
router.post('/post/:postId',(req,res,next)=>{
    res.send('(Response form V2) Post Created With Specific ID')
})
router.delete('/post/:postId',(req,res,next)=>{
    res.send('(Response form V2) Post deleted With Specific ID')
})

export default router;