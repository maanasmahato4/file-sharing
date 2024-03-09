import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import { NavBar } from './components/navbar/navbar';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Layout />
			</main>
		</BrowserRouter>
	</React.StrictMode>,
);
