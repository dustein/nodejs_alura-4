import express from 'express';
// import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();

// app.use(bodyParser.json());

const port = 3000;

routes(app);
// app.get("/teste", (req, res) => {
//     res.send({messagem: "OK funciona certo"});
// })

app.listen(port, () => console.log("OnLINE !"));
