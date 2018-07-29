import React, { Component } from 'react';
import Header from './Header'
import NavBar from './NavBar'
import Content from './Content'
import Footer from './Footer'

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				<NavBar />
				<Content />
				<Footer />
			</div>
		);
	}
}