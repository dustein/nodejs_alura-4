import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) => {
    res.send({messagem: "OK funciona certo"});
})

app.listen(port, () => console.log("OnLINE !"));
