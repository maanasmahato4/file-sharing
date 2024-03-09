import express from 'express';
import { GetFile, NewFile } from '../controllers/file.controller.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.post('/download', GetFile).post('/file', upload.single('file'), NewFile);

export default router;
