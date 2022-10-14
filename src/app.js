import express from 'express';

const app = express();
const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send('Listo');
})

app.listen(PORT,()=> console.log(`Listening on ${PORT}`));






