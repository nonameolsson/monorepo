/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import data from './assets/data.json';

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4200',
  'http://localhost:4201',
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to blog-api!' });
});

app.get('/api/posts/latest', (req, res) => {
  const latestPost = data[0];
  res.send(latestPost);
});

app.get('/api/posts', (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);