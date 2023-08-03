import express from 'express';
let router = express.Router();

// Importing our routers 
import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'

router.use(authRouter)
router.use(commentRouter)
router.use(feedRouter)
router.use(postRouter)

export default router;