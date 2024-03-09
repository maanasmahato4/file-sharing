import React from 'react';
import { CopyToClipBoardButton } from '../buttons/buttons';
import './link_box.css';

export const LinkBox: React.FC<{ link: string | null; hide: boolean }> = ({
	link,
	hide,
}) => {
	const style = hide ? { display: 'none' } : {};
	return (
		<div className='link-box' style={style}>
			<p>{link}</p>
			<CopyToClipBoardButton link={link} />
		</div>
	);
};
