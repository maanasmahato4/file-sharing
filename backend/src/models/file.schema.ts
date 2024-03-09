import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
	{
		fileName: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const File = mongoose.model('files', fileSchema);
export default File;
