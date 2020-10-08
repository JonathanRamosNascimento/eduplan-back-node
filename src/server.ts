import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const server = express();

server.use(express.json());

mongoose.connect('mongodb://localhost:27017/eduplan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(routes);

// Executa o servidor na porta 3000
server.listen(3000, () => console.log('Running on port 3000'));
