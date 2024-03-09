import React, { useState } from 'react';
import { DragAndDrop } from '../../components/drag_and_drop/drag_and_drop';
import { Button } from '../../components/buttons/buttons';
import { LinkBox } from '../../components/link_box/link_box';
import { HttpRequest } from '../../lib/http/httpRequest';
import './share_file.css';

function ShareFile(): React.ReactElement {
	const [uploadedFile, setUploadedFile] = useState<File>();
	const [link, setLink] = useState<string | null>(null);

	async function handleSubmit() {
		if (uploadedFile) {
			const formData = new FormData();
			formData.append('file', uploadedFile);
			try {
				const response = await HttpRequest.post(
					'https://file-sharing-git-main-maanas-mahatos-projects.vercel.app/api/v1/file',
					formData,
				);
				const responseData = await response.json();
				setLink(responseData.url);
			} catch (error) {
				console.error('Error uploading file:', error);
			}
		} else {
			console.error('No file uploaded');
		}
	}

	return (
		<div className='upload-screen'>
			<DragAndDrop setUploadedFile={setUploadedFile} />
			<Button onClickHandler={handleSubmit} />
			<LinkBox hide={link ? false : true} link={link} />
		</div>
	);
}

export default ShareFile;
