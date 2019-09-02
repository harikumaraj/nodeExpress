import http from 'http';

import app from './app';

import condtants from './constants';

const port = condtants.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
