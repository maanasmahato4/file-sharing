import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';

	if (status >= 500) {
		return res.status(status).json({ error: message, stack: err.stack });
	} else {
		return res.status(status).json({ error: err });
	}
};

export default globalErrorHandler;
