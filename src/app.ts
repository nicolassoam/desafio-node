import express from 'express';
import cors from "cors";
import routes from './index';

const app = express();

routes(app);
export default app;