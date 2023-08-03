import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();

import apiV1Router from './apiv1/index.mjs'
import apiV2Router from './apiv2/index.mjs'

app.use('/api/v1', apiV1Router);
app.use('/api/v2', apiV2Router);


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port: ${PORT}`);
})