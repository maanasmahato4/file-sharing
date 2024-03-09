import mongoose from 'mongoose';

async function connection(db_url: string) {
	return await mongoose
		.connect(db_url)
		.then(() => console.log('database running'))
		.catch((error) => console.error(error));
}

export default connection;
