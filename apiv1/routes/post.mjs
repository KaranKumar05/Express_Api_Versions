import express from 'express';
let router = express.Router();


router.get('/post/:postId', (req,res,next)=>{
    res.send('(Response form V1) Specific post of Specific user')
})
router.post('/post/:postId',(req,res,next)=>{
    res.send('(Response form V1) Post Created With Specific ID')
})
router.delete('/post/:postId',(req,res,next)=>{
    res.send('(Response form V1) Post deleted With Specific ID')
})

export default router;