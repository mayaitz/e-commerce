import express from 'express';
const app = express();
const port = 8000;

app.get('/', (req, res) =>{
   res.send('Hello World');
})

app.listen(port, function () {
   console.log("Express App running at http://127.0.0.1:8000/");
})