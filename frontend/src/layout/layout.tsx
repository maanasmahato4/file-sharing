import { Routes, Route } from 'react-router-dom';
import ShareFile from '../pages/ShareFile/share_file';
import DownloadFile from '../pages/DowloadFile/download_file';
import './layout.css';

function Layout() {
	return (
		<Routes>
			<Route index element={<ShareFile />} />
			<Route path='/upload' element={<ShareFile />} />
			<Route path='/download' element={<DownloadFile />} />
		</Routes>
	);
}

export default Layout;
