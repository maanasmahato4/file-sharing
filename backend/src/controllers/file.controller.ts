import { Request, Response } from 'express';
import File from '../models/file.schema.js';
import path from 'path';

export async function GetFile(
	req: Request,
	res: Response
): Promise<void | Response> {
	try {
		const { url } = req.body;
		const pathSegments = url.split('/');
		const fileName = pathSegments[pathSegments.length - 1];
		const file = await File.findOne({ fileName });
		if (!file) {
			return res.status(404).json({ success: false, message: 'File not found' });
		}
		const fileDir = path.join(process.cwd(), 'uploads', fileName);
		res.set({
			'X-Custom-Name': fileName
		});
		res.download(fileDir, fileName);
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ success: false, message: 'Internal server error' });
	}
}

export async function NewFile(req: Request, res: Response): Promise<Response> {
	try {
		const fileName = req.file?.filename;
		const mimeType = req.file?.mimetype;
		const newFile = await File.create({ fileName, contentType: mimeType });

		const protocol = req.protocol;
		const host = req.get('host');
		const path = newFile.fileName;

		const fullUrl = `${protocol}://${host}/${path}`;
		return res.status(200).json({ success: true, url: fullUrl });
	} catch (error) {
		return res.status(500).json(error);
	}
}
