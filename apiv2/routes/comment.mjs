import express from 'express';
let router = express.Router();

// Get Data from server 
router.get('/comments', (req,res,next)=>{
    res.send('(Response form V2) All Comments')
})
router.get('/comment/:postId/:commentId', (req,res,next)=>{
    res.send('(Response form V2) Specific Comment of Specific User')
})
router.get('/comment/:postId', (req,res,next)=>{
    res.send('(Response form V2) Specific post with all comments')
})
// Posting the comment 
router.post('/comment/:postId/:commentId', (req,res,next)=>{
    res.send('(Response form V2) Comment Posted')
})
// Editing Comment 
router.patch('/comment/:postId/:commentId', (req,res,next)=>{
    res.send('(Response form V2) Specific Comment of Specific post Edited')
})
// Delete Comment 
router.delete('/comment/:postId/:commentId', (req,res,next)=>{
    res.send('(Response form V2) Deleting Specific Comment of Specific User')
})

export default router;