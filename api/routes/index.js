import bodyParser from 'body-parser';

const routes = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.send('index dentro de routes')
    })
}

export default routes;