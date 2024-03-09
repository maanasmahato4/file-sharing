import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function NavBar(): ReactElement {
	return (
		<div className='navbar'>
			<Link className='link' to='/upload'>
				Upload File
			</Link>
			<Link className='link' to='/download'>
				Download File
			</Link>
		</div>
	);
}
