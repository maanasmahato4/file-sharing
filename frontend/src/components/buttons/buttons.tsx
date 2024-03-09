import './buttons.css';

type ButtonHandler = () => void;

export const Button: React.FC<{ onClickHandler: ButtonHandler }> = ({
	onClickHandler,
}) => {
	return (
		<button className='primary button' onClick={onClickHandler}>
			Get Link
		</button>
	);
};

export const CopyToClipBoardButton: React.FC<{ link: string | null }> = ({
	link,
}) => {
	const handleClick = async () => {
		if (link) {
			await navigator.clipboard.writeText(link);
		}
	};

	return (
		<button
			className='copy-button'
			onClick={handleClick}
			aria-label='Copy to clipboard'
		>
			Copy
		</button>
	);
};
