import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

export default app;
