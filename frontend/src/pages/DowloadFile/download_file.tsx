import React, { useState, ChangeEvent, FormEvent } from 'react';
import download from 'downloadjs';
import { HttpRequest } from '../../lib/http/httpRequest';
import { UrlInput } from '../../components/url_input/url_input';
import './download_file.css';

function DownloadFile(): React.ReactElement {
	const [downloadUrl, setDownloadUrl] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleDownloadUrlSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();
		setIsLoading(true);
		setError(null);
		try {
			const response = await HttpRequest.downloadFile(
				'file-sharing-vmbp.vercel.app/api/v1/download',
				downloadUrl,
			);
			const fileName = response.headers['x-custom-name'];
			const mimeType = response.headers['content-type'];
			download(response.data, fileName, mimeType);
		} catch (error) {
			setError('Failed to download file. Check if the Url is correct or not!');
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setDownloadUrl(event.target.value);
	};
	return (
		<div className='df-screen'>
			<UrlInput
				downloadUrl={downloadUrl}
				isLoading={isLoading}
				error={error}
				handleDownloadUrlSubmit={handleDownloadUrlSubmit}
				handleInputChange={handleInputChange}
			/>
		</div>
	);
}

export default DownloadFile;
