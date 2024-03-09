import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes.js';
import connection from './database/database.js';
import globalErrorHandler from './utils/globalErrorHandler.js';

dotenv.config();
const db_url = process.env.DATABASE_URL as string;
const PORT = process.env.PORT as string;

const app = express();
app.use(
	cors({
		origin: '*',
		allowedHeaders: '*',
		exposedHeaders: ['X-Custom-Name']
	})
);
app.use(express.json());

app.use(globalErrorHandler);

app.listen(PORT, () => {
	console.log(`server running...`);
	connection(db_url);
	app.use('/api/v1', routes);
});
