import express from 'express';
import 'reflect-metadata';
import '@shared/container'
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

export { app };