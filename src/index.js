import http from 'http';

import app from './app';

import {PORT} from './constants';

const port = PORT || 3000;

const server = http.createServer(app);

server.listen(port);
