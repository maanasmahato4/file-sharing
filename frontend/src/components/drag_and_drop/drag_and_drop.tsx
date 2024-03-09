import React from 'react';
import './drag_and_drop.css';

type TDragAndDrop = {
	setUploadedFile: (uploadedFile: File) => void;
};

export const DragAndDrop: React.FC<TDragAndDrop> = ({
	setUploadedFile,
}: TDragAndDrop): React.ReactElement => {
	function clickFileInput() {
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		return fileInput?.click();
	}

	function allowDrag(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		event.stopPropagation();
	}

	function dropFile(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		event.stopPropagation();
		const file = event.dataTransfer.files[0];
		if (file) {
			setUploadedFile(file);
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const files = event.target.files;
		if (files) {
			setUploadedFile(files[0]);
		}
	}

	return (
		<div className='container'>
			<div
				className='dropzone'
				onClick={clickFileInput}
				onDragOver={allowDrag}
				onDrop={dropFile}
			>
				<span className='dd-header'>Drag & Drop</span>
				<span className='dd-header'>
					Or <span className='dd-button'>Browse</span>
				</span>
				<input type='file' hidden id='fileInput' onChange={handleInputChange} />
				<span className='dd-footer'>Supported File: .PNG, .JEPG, .JPG</span>
			</div>
		</div>
	);
};
