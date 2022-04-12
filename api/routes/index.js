import express from 'express';
import router from './pessoasRoute.js';

const routes = app => {
    app.use(express.json());
    app.use(router)
}

export default routes;