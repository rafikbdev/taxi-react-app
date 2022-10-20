import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';

import Landing from './components/Landing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import './App.css';


function App () {
	return (
		<Routes>
			<Route path="/" element={<Layout />} />
			<Route index element={<Landing />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/log-in" element={<LogIn />} />
		</Routes>
	);
}

function Layout () {
	return (
		<>
			<Navbar bg='light' expand='lg' variant='light'>
			<Container>
				<LinkContainer to='/'>
				<Navbar.Brand className='logo'>Taxi</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle />
				<Navbar.Collapse />
			</Container>
			</Navbar>
			<Container className='pt-3'>
			<Outlet />
			</Container>
		</>
	);
}

export default App;
