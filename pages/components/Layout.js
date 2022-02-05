import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Layout</title>
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>
			<Navbar />
			<main className={'main-container'}>{children}</main>
			<Footer />
		</>
	);
}
