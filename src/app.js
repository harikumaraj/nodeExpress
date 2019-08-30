import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {config} from 'dotenv';

import products from './routes/products';

import orders from './routes/orders';

import users from './routes/users';

import root from './routes/authenticate';

config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const app = express();

app.use(morgan('dev'));

app.use('/images', express.static('images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorisation, Content-Type, Origin, X-Requested-With, Accept'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'GET, PUT, POST, PATCH, DELETE'
        );
        return res.status(200).json({});
    }
    next();
});

app.use('/', root);
app.use('/products', products);
app.use('/orders', orders);
app.use('/users', users);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
    throw new Error(error);
});

export default app;
