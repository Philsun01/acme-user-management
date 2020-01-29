import React, { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import Nav from './Nav.js';
import Home from './Home.js';
import Users from './Users.js';
import './App.css';

function App() {
	
	const [view, setView] = useState('Home');
	
	const getHash = ()=> {
		return window.location.hash.slice(1);
	}
	const [ params, setParams ] = useState(qs.parse(getHash()));

	useEffect(()=> {
		window.addEventListener('hashchange', ()=> {
			setView(getHash());
			setParams(qs.parse(getHash()));
		});
		setParams(qs.parse(getHash()));
	}, []);
	
	return (
		<div className="App">
			<Nav setParams = { setParams } params = { params }/>
			{ view === 'users' && <Users /> }
			{ view === 'home' && <Home /> }
		</div>
	);
}

export default App;
