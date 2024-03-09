import React, { ChangeEvent, FormEvent } from 'react';
import './url_input.css';

type UrlInputProps = {
	downloadUrl: string;
	isLoading: boolean;
	error: string | null;
	handleDownloadUrlSubmit: (event: FormEvent<HTMLFormElement>) => void;
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const UrlInput: React.FC<UrlInputProps> = ({
	downloadUrl,
	isLoading,
	error,
	handleDownloadUrlSubmit,
	handleInputChange,
}): React.ReactElement => {
	return (
		<form onSubmit={handleDownloadUrlSubmit} className='url-form'>
			<input
				type='text'
				placeholder='Download file url...'
				className='url-input'
				value={downloadUrl || ''}
				onChange={handleInputChange}
				disabled={isLoading}
			/>
			<button
				className='df-button'
				type='submit'
				disabled={!downloadUrl || isLoading}
			>
				{isLoading ? 'Loading...' : 'Download'}
			</button>
			{error && <p className='error-message'>{error}</p>}
		</form>
	);
};
